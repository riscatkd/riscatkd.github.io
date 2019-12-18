import React from 'react';
import { css } from '@emotion/core';
import Block from '../components/Block';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import DirectionsIcon from '../../icons/directions.svg';
import colors from '../colors';

const VenueDetails = ({
  day,
  directionsURL,
  location,
  times
}) => (
  <Block>
    <Heading>{day}</Heading>
    <SubHeading inline>{location}</SubHeading>
    <a
      css={styles.directions}
      href={directionsURL}
      target="_blank"
    >
      <DirectionsIcon css={styles.directionsIcon} /> Get directions
    </a>
    <ul css={styles.times}>
      {Object.entries(times).map(([className, { start, end }]) => (
        <li css={styles.time}>
          {className}: {start} - {end}
        </li>
      ))}
    </ul>
  </Block>
);

const styles = {
  directions: css`
    align-items: center;
    color: ${colors.link};
    display: flex;
    font-size: 12px;
    text-decoration: none;
    white-space: nowrap;
  `,
  directionsIcon: css`
    height: 20px;
    margin-right: 5px;
  `,
  time: css`
    font-size: 12px;
    text-transform: capitalize;
  `,
  times: css`
    list-style: none;
    margin: 10px 0 0;
    padding: 0;
  `
};

export default VenueDetails;
