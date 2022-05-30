import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const content = {
  tagline: '',
  title: 'Bryan Szendel.',
  subtitle: 'FullStack Developer. Problem Solver. JavaScript Lover.',
  description:
    "Currently the Lead Software Developer at Big Armor where I write JavaScript in the form of Angular and Node/Apollo GraphQL. When I'm not writing code, I love working on house projects and working outside in the yard/garden (currently in a multi-year marathon updating our primary bedroom/bath with new tile, fixtures, and literally everything). One of my great joys in life is watching things grow and take shape as they mature. I value this theme in my career as well as in everyday life, which is why I have such an affinity for construction projects, gardening, and coding.",
  links: [
    {
      to: 'https://github.com/bryanszendel',
      text: 'bryanszendel',
      Icon: FaGithub,
      newTab: true,
    },
    {
      to: 'https://linkedin.com/in/bryan-szendel',
      text: 'bryan-szendel',
      Icon: FaLinkedin,
      newTab: true,
    },
    {
      to: 'mailto:bryan.szendel@gmail.com',
      text: 'bryan.szendel@gmail.com',
      Icon: FaEnvelope,
      newTab: true,
    },
  ],
};

export default content;

