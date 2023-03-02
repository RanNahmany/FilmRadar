import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    // [theme.breakpoints.down('sm')]: {
    //   marginLeft: '0px',
    //   flexWrap: 'wrap',
    // },
  },
  menuButton: {
    marginLeft: '10px',
  }
  // marginRight: theme.spacing(2),
  // [theme.breakpoints.up('sm')]: {
  //   display: 'none',
  // },
  // },
}));
