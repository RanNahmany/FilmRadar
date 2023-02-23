import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100%',
    // alignItems: 'center',
    // backgroundColor: '#000',
    // color: '#fff',
  },
  content: {
    // display: 'flex',
    flexGrow: 1,
    padding: '2em',
  },
  toolbar: {
    minHeight: '70px',
  },
}));
