import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { Animated, LinkList } from '../../components';

import content from './content';

const { tagline, title, subtitle, description, links } = content;

const Welcome = () => (
  <>
    <Typography variant='h3' color='textPrimary'>
      {tagline}
    </Typography>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <Animated>{title}</Animated>
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
      {subtitle}
    </Typography>
    <LinkList links={links} />
    <Fade in timeout={1000}>
      <Typography color='textPrimary'>{description}</Typography>
    </Fade>
  </>
);

export default Welcome;

