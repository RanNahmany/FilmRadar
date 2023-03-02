import { createUseStyles } from 'react-jss';
// import { useTheme } from '@mui/material/styles';

export const useStyles = createUseStyles(() => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    width: '30%',
  },
  links: {
    // color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImages: {
    // filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
  },
}));
