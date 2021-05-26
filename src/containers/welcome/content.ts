import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const content = {
  tagline: '',
  title: 'Bryan Szendel.',
  subtitle: 'FullStack Developer. Problem Solver. JavaScript Lover.',
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
