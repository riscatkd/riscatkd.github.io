import React from 'react';
import { css } from '@emotion/core';
import colors from './colors';
import TAGBLogo from '../images/tagb_logo.jpg';
import BTCLogo from '../images/btc_logo.png';
import UKSportLogo from '../images/uk_sport_logo.png';
import DBSCheckedLogo from '../images/dbs_checked_logo.png';

const LOGOS = [TAGBLogo, BTCLogo, UKSportLogo, DBSCheckedLogo];

const Footer = () => (
  <footer css={styles.footer}>
    {LOGOS.map((logo, index) => (
      <img
        key={index}
        css={styles.affiliatedLogo}
        src={logo}
      />
    ))}
  </footer>
);

const styles = {
  affiliatedLogo: css`
    height: 40px;
    margin: 0 10px;
  `,
  footer: css`
    align-items: center;
    border-top: 1px solid ${colors.border};
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding: 10px;
    width: 100%;
  `
};

export default Footer;
