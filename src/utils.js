export const getDocumentHeight = () => (
  Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  )
);

export const getWindowHeight = () => (
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.getElementsByTagName('body')[0].clientHeight
);

export const scrollTo = (destination, { duration = 200, onScrollEnd } = {}) => {
  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = getDocumentHeight();
  const windowHeight = getWindowHeight();
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(
    documentHeight - destinationOffset < windowHeight
      ? documentHeight - windowHeight
      : destinationOffset
  );

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    onScrollEnd && onScrollEnd();
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, (now - startTime) / duration);
    window.scroll(0, Math.ceil((time * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      onScrollEnd && onScrollEnd();
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
};

export const throttle = (fn, limit = 500) => {
  let lastFn;
  let lastRan;

  return (...args) => {
    if (lastRan) {
      window.clearTimeout(lastFn);

      lastFn = window.setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          fn(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    } else {
      fn(...args);
      lastRan = Date.now();
    }
  };
};
