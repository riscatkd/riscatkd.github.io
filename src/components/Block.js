import React from 'react';
import { css } from '@emotion/core';
import layout from '../layout';

const Block = ({ children }) => (
  <div css={styles.block}>
    {children}
  </div>
);

const styles = {
  block: css`
    margin-bottom: 20px;
    min-width: ${(layout.maxWidth - (layout.padding * 2)) / 2}px;
  `
};

export default Block;
