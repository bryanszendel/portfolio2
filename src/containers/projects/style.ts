const styles = ({ typography }) => ({
  container: {
    padding: `${typography.pxToRem(32)} 0`,
  },
  title: {
    paddingBottom: 5,
  },
  noHref: {
    textDecoration: 'none',
  },
  description: {},
  github: {
    display: 'flex',
    height: 18,
    alignItems: 'center',
    marginBottom: 4,
  },
  link: {
    marginLeft: 8,
  },
});

export default styles;

