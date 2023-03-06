import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => ({
  movie: {
    padding: '10px',
    textAlign: 'center',
  },
  title: {
    textOverflow: 'ellipsis',
    // width: '230px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '0px',
    marginBottom: '0px',
    textAlign: 'center',
  },
  links: {
    alignItems: 'center',
    fontWeight: 'bolder',
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  image: {
    // center the image that lasts inside a grid
    display: 'block',
    margin: 'auto',
    borderRadius: '10px',
    height: '250px',
    marginBottom: '10px',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));
