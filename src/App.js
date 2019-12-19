import React, { useEffect, useState } from 'react';
import { css, Global } from '@emotion/core';
import colors from './colors';
import { throttle, getDocumentHeight, getWindowHeight } from './utils';
import About from './about/About';
import Footer from './Footer';
import Header from './Header';
import Times from './times/Times';
import layout from './layout';

const SECTIONS = ['times', 'about'];

const App = () => {
  const [currentSection, setCurrentSection] = useState(SECTIONS[0]);
  const [dimensions, setDimensions] = useState({
    document: getDocumentHeight(),
    window: getWindowHeight()
  });
  const [canHeaderResize, setCanHeaderResize] = useState(
    dimensions.document - dimensions.window > layout.headerHeight - layout.headerHeightSmall
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderSmall, setIsHeaderSmall] = useState(canHeaderResize && isScrolled);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('scroll', checkScroll);

    window.requestAnimationFrame(updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  useEffect(() => {
    setIsHeaderSmall(canHeaderResize && isScrolled);
  }, [canHeaderResize, isScrolled]);

  const checkScroll = throttle(() => {
    const headerHeight = isHeaderSmall ? layout.headerHeightSmall : layout.headerHeight;
    const {
      scrollY: windowScrollY
    } = window;
    const contentAreaHeight = dimensions.window - headerHeight;

    setIsScrolled(scrollY > 0);

    SECTIONS.some((section) => {
      const {
        offsetHeight: sectionHeight,
        offsetTop: sectionY
      } = window[section].parentElement;
      const sectionScrollPosition = sectionY - windowScrollY - headerHeight;

      // Mark item as active if it's near the top, or if more than 50% of the section is visible
      const isActive = (sectionScrollPosition <= 200 && sectionScrollPosition + sectionHeight > 0) || (sectionScrollPosition - contentAreaHeight) >= (sectionHeight / 2);

      if (isActive) {
        setCurrentSection(section);
        return true;
      }

      return false;
    });
  }, 100);

  const updateDimensions = () => {
    const documentHeight = getDocumentHeight();
    const windowHeight = getWindowHeight();

    setDimensions({
      document: documentHeight,
      window: windowHeight
    });
    setCanHeaderResize(documentHeight - windowHeight > layout.headerHeight - layout.headerHeightSmall);
  };

  return (
    <React.Fragment>
      <Global styles={[styles.global, isHeaderSmall && styles.globalBodyScrolled]} />

      <Header
        currentSection={currentSection}
        sections={SECTIONS}
        shrink={isHeaderSmall}
      />

      <main css={styles.mainContent}>
        <Times offset={isHeaderSmall ? layout.headerHeightSmall : layout.headerHeight} />
        <About offset={isHeaderSmall ? layout.headerHeightSmall : layout.headerHeight} />
      </main>

      <Footer />
    </React.Fragment>
  );
};

const styles = {
  global: css`
    * {
      box-sizing: border-box;
    }

    *::after, *::before {
      box-sizing: inherit;
    }

    body {
      color: ${colors.text};
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      height: 100%;
      line-height: 20px;
      margin: 0;
      padding-top: ${layout.headerHeight}px;
      transition: padding 0.1s linear;
    }

    html {
      height: 100%;
    }

    #app {
      display: flex;
      flex-direction: column;
      min-height: 100%;
    }
  `,
  globalBodyScrolled: css`
    body {
      padding-top: ${layout.headerHeightSmall}px;
    }
  `,
  mainContent: css`
    margin: 0 auto;
    max-width: ${layout.maxWidth}px;
  `
};

export default App;
