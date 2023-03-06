import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => ({
  moviesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto',
  },
}));
