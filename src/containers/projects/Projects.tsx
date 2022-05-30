import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { Animated, LinkList } from '../../components';

import content from './content';
import { Container, Link } from '@material-ui/core';
import styles from './style';
import { withStyles } from '@material-ui/styles';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const { tagline, title, subtitle, links, projects } = content;

interface Props {
  classes: any;
}

const Projects = ({ classes }) => (
  <>
    <Fade in timeout={1000}>
      <Typography variant='h4' color='textPrimary'>
        Projects:
      </Typography>
    </Fade>
    {projects.map((project, index) => (
      <Container key={index} className={classes.container}>
        <Fade in timeout={1000}>
          <Typography
            variant='h6'
            color='textPrimary'
            className={project.link ? classes.title : classes.noHref}>
            {project.title}
          </Typography>
        </Fade>
        <Fade in timeout={1000}>
          <Typography color='textPrimary' className={classes.description}>
            {project.description.map(descript => (
              <p>{descript}</p>
            ))}
          </Typography>
        </Fade>
        {project.github && (
          <Fade in timeout={1000}>
            <Typography>
              <Link
                className={classes.github}
                href={project.github}
                target='_blank'
                rel='noopener'>
                <FaArrowAltCircleRight />
                <div className={classes.link}>View on Github</div>
              </Link>
            </Typography>
          </Fade>
        )}

        {project.link && (
          <Fade in timeout={1000}>
            <Typography>
              <Link
                className={classes.github}
                href={project.link}
                target='_blank'
                rel='noopener'>
                <FaArrowAltCircleRight />
                <div className={classes.link}>View Live</div>
              </Link>
            </Typography>
          </Fade>
        )}
      </Container>
    ))}
  </>
);

export default withStyles(styles)(Projects);

