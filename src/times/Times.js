import React from 'react';
import { css } from '@emotion/core';
import Section from '../components/Section';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Block from '../components/Block';
import VenueDetails from './VenueDetails';

const Times = ({ offset }) => {
  return (
    <Section name='times' offset={offset}>
      <VenueDetails
        day='monday'
        directionsURL='https://goo.gl/maps/NuQaP5E1U9Hgt8Wo9'
        location='Risca Youth Club (Brookland Rd entrance)'
        times={{
          kids: { start: '17:30', end: '19:00' },
          adults: { start: '19:00', end: '20:00' }
        }}
      />

      <VenueDetails
        day='thursday'
        directionsURL='https://goo.gl/maps/sF9wM3RKt2Z5qJ6U9'
        location='Risca Leisure Centre (Machen Suite)'
        times={{
          kids: { start: '18:00', end: '19:00' },
          adults: { start: '19:00', end: '21:00' }
        }}
      />
    </Section>
  );
};

export default Times;
