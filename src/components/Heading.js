import React from 'react';
import { css } from '@emotion/core';

const Heading = ({ children }) => (
  <h1 css={styles.heading}>
    {children}
  </h1>
);

const styles = {
  heading: css`
    font-weight: 500;
    line-height: 30px;
    margin: 0;
    text-transform: uppercase;
  `
};

export default Heading;
