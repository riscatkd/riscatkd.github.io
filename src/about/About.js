import React from 'react';
import { css } from '@emotion/core';
import Section from '../components/Section';
import Heading from '../components/Heading';
import History from './History';
import Block from '../components/Block';
import Instructor from './Instructor';
import SimeonBowenPhoto from '../../images/simeon.jpg';
import TomWisemanJrPhoto from '../../images/tom_jr.jpg';
import TomWisemanPhoto from '../../images/tom_sr.jpg';

const About = ({ offset }) => {
  return (
    <Section name='about' offset={offset}>
      <Block>
        <Heading>Instructor</Heading>
        <Instructor
          grade='3rd degree black belt'
          name='Tom Wiseman'
          photo={TomWisemanPhoto}
        />
      </Block>

      <Block>
        <Heading>Assistant Instructors</Heading>
        <Instructor
          assistant
          grade='3rd degree black belt'
          name='Tom Wiseman Jr'
          photo={TomWisemanJrPhoto}
        />
        <Instructor
          assistant
          grade='3rd degree black belt'
          name='Simeon Bowen'
          photo={SimeonBowenPhoto}
        />
      </Block>

      <Block>
        <Heading>History</Heading>
        <History />
      </Block>
    </Section>
  );
};

export default About;
