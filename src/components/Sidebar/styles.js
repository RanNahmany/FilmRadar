import { createUseStyles } from 'react-jss';
// import { useTheme } from '@mui/material/styles';

export const useStyles = createUseStyles(() => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
    filter: 'brightness(1.2)',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
      transform: 'scale(1.02)',
    },
  },
  image: {
    width: '60%',
    height: 'auto',
    borderRadius: '10px',
  },
  links: {
    // color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImages: {
    // filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
  },
}));
