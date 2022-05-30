import muiTheme from './muiTheme';

const theme = {
  ...muiTheme,
  app: {
    maxWidth: muiTheme.typography.pxToRem(960),
  },
  container: {
    maxWidth: 1220,
  },
};

export default theme;

