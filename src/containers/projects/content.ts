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
  projects: [
    {
      link: 'https://www.connectourkids.org/tools',
      title: 'Angular/GraphQL Social Worker App | Connect Our Kids',
      description: [
        'This project helps Social Workers to build out family trees for children in foster care while looking for permanent homes for them. The tool provides search and genogram-building capabilities via third-party integrations with Pipl.com and yFiles for HTML. Key technologies are Angular, GraphQL, TypeORM, and yFiles for HTML.',
        'Implemented Team Metrics Reporting interface with GraphQL queries to gather and reduce key metrics related to team interactions.',
        'Integrated Audit Logging into each Apollo GraphQL resolver to capture key events throughout system and report them to Team Managers and Site Administrators.',
        'Implemented Guide Me feature to walk new users through process of creating relationships and adding outreach engagements that they have had with those individuals. This feature is a large form stepper that creates relationships and engagements as the user progresses and automatically fills out the yFiles for HTML genogram on behalf of the user.',
        'Integrated directly with third-party search tool, Lexis Nexis Accurint via REST to find and import data about potential case relationships. Created import types and interfaces and mapped to existing entity fields.',
        'Update Mocha/Chai test suites as backend APIs are updated.',
        'Fixed various bugs throughout codebase.',
      ],
      Icon: '',
      github: null,
      newTab: true,
    },
    {
      link: 'https://www.nickrichardsondesign.com',
      title: 'Gatsby Site | Nick Richardson Design Portfolio',
      description: [
        'Portfolio site for Nick Richardson Design. Wrote custom and reusable React components, JSX, and SCSS to lay out user interface adhering to design specs.',
      ],
      Icon: '',
      github: 'https://github.com/bryanszendel/nick-richardson-design',
      newTab: true,
    },
    {
      link: '',
      title: 'Node.js CRUD Boilerplate Server',
      description: [
        'Boilerplate Node.js API server that supports CRUD operations on various items. Used Express and Knex.js as ORM to perform queries and other operations to manipulate Postgres database.',
      ],
      Icon: null,
      github: 'https://github.com/bryanszendel/node-backend-boilerplate',
      newTab: true,
    },
  ],
};

export default content;

