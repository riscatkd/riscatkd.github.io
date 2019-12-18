import React from 'react';
import { css } from '@emotion/core';
import layout from '../layout';

const Section = ({ children, name, offset }) => {

  return (
    <section css={styles.section}>
      <a
        css={[
          styles.anchor,
          {
            top: `-${offset}px`
          }
        ]}
        id={name}
      />

      {children}
    </section>
  );
};

const styles = {
  anchor: css`
    left: -9990px;
    position: absolute;
  `,
  section: css`
    display: flex;
    flex-wrap: wrap;
    padding: ${layout.padding}px;
    position: relative;
  `
};

export default Section;
