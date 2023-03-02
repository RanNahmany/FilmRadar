import { React, useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery, Icon } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import { Sidebar } from '..';

import { useStyles } from './styles';

function NavBar() {
  const [desktopOpen, setDesktopOpen] = useState(true);
  const classes = useStyles();
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            { theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 /> }
          </IconButton>
          search...
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button color="inherit" component={Link} to="/profile/:id" className={classes.linkButton}>
                Ran Nahmany &nbsp;
                <Avatar style={{ width: 30, height: 30 }} alt="profile" src="https://i.pravatar.cc/400?img=12" />
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>

      {/* now we're going to create the sidebar */}
      <nav className={classes.drawer}>
        {/* <Drawer> */}
        {/* variant="permanent"
          anchor="Left"
          open={desktopOpen}
          className={classes.drawerBackground}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        > */}
        <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
          <Sidebar setDesktopOpen={setDesktopOpen} />
        </Drawer>
      </nav>
    </div>
  );

//   return (
//     <div>
//       <AppBar position="fixed">
//         <Toolbar />
//       </AppBar>
//     </div>
//   );
}

// function NavBar() {
//     console.log('NavBar');

//     const classes = useStyles();
//     const isMobile = useMediaQuery('(max-width: 600px)');

//     return (
//       <div>
//         <AppBar position="fixed">
//           <Toolbar className={classes.toolbar}>
//             {isMobile && (
//               <IconButton
//                 color="inherit"
//                 edge="start"
//                 style={{ outline: 'none' }}
//                 onClick={() => {}}
//                 className={classes.menuButton}
//               >
//                 <Menu />
//               </IconButton>
//             )}
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }

export default NavBar;
