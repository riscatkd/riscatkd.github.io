import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/core';
import colors from '../colors';
import { scrollTo } from '../utils';

const MENU_ITEM_PADDING_HORIZONTAL = 10;

const Navigation = ({
  menuItems,
  selectedItem
}) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const markerRef = useRef();
  const selectedItemRef = useRef();

  const handleClick = (item) => () => {
    scrollTo(window[item].parentElement.offsetTop - Math.abs(window[item].offsetTop), {
      onScrollEnd: () => window.location.hash = item
    });
  };

  const updateMarker = () => {
    markerRef.current.style.transform = `translateX(${selectedItemRef.current.offsetLeft - MENU_ITEM_PADDING_HORIZONTAL}px)`;
    markerRef.current.style.width = `${selectedItemRef.current.offsetWidth}px`;
  };

  useEffect(() => {
    window.addEventListener('resize', updateMarker);
    setIsInitialized(true);

    return () => window.removeEventListener('resize', updateMarker);
  }, []);

  useEffect(updateMarker, [selectedItem, selectedItemRef.current]);

  return (
    <ul css={styles.menu}>
      {menuItems.map((item) => (
        <li
          key={item}
          ref={selectedItem === item ? selectedItemRef : null}
          css={styles.item}
          onClick={handleClick(item)}
        >
          {item}
        </li>
      ))}

      <li
        ref={markerRef}
        css={[
          styles.item,
          styles.marker,
          isInitialized && styles.markerAnimated
        ]}
      />
    </ul>
  );
};

const styles = {
  item: css`
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    margin: 5px ${MENU_ITEM_PADDING_HORIZONTAL}px;
    position: relative;
    text-transform: uppercase;
    user-select: none;
  `,
  marker: css`
    bottom: 0;
    left: 0;
    position: absolute;

    &::after {
      border-bottom: 2px solid ${colors.selected};
      bottom: 0;
      content: '';
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
      transition: border-bottom-color 0.1s linear;
      width: 40px;
    }
  `,
  markerAnimated: css`
    transition: transform 0.1s ease-out;
  `,
  menu: css`
    border: solid ${colors.border};
    border-width: 1px 0;
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
  `
};

export default Navigation;
