import React from 'react';
import { css } from '@emotion/core';
import Logo from '../images/logo.jpg';
import Navigation from './components/Navigation';
import layout from './layout';
import colors from './colors';

const Header = ({ currentSection, sections, shrink }) => (
  <header
    css={[
      styles.header,
      shrink && styles.headerSmall
    ]}
  >
    <img css={styles.logo} src={Logo} />
    <Navigation menuItems={sections} selectedItem={currentSection} />
  </header>
);

const styles = {
  header: css`
    align-items: center;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    height: ${layout.headerHeight}px;
    justify-content: space-between;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: height 0.1s linear;
    z-index: 1;
  `,
  headerSmall: css`
    box-shadow: 0 0 3px 1px ${colors.border};
    height: ${layout.headerHeightSmall}px;
  `,
  logo: css`
    height: 60%;
    margin: auto;
  `
};

export default Header;