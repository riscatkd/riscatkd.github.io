import React from 'react';
import { css } from '@emotion/core';
import SubHeading from '../components/SubHeading';
import colors from '../colors';

const Instructor = ({
  assistant,
  grade,
  name,
  photo
}) => (
  <div css={styles.instructor}>
    <span
      css={[
        styles.photo,
        assistant && styles.photoSmall,
        {
          backgroundImage: `url("${photo}")`
        }
      ]}
    />
    <div css={styles.details}>
      <SubHeading>{name}</SubHeading>
      <span css={styles.grade}>{grade}</span>
    </div>
  </div>
);

const styles = {
  details: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  grade: css`
    color: ${colors.textLighter};
    font-size: 12px;
  `,
  instructor: css`
    align-items: center;
    display: flex;
    margin-top: 10px;
  `,
  photo: css`
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    display: inline-block;
    height: 50px;
    margin-right: 10px;
    width: 50px;
  `,
  photoSmall: css`
    height: 35px;
    width: 35px;
  `
};

export default Instructor;
