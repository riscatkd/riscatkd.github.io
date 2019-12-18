import React from 'react';
import { css } from '@emotion/core';
import colors from '../colors';

const SubHeading = ({ children, inline }) => (
  <h2 css={[styles.subHeading, inline && styles.subHeadingInline]}>
    {children}
  </h2>
);

const styles = {
  subHeading: css`
    color: ${colors.textLight};
    font-size: 12px;
    font-weight: 500;
    margin: 0;
  `,
  subHeadingInline: css`
    display: inline-block;
  `
};

export default SubHeading;
