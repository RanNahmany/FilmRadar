import { React, useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, circularProgress, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useStyles } from './styles';

const aiItem = { name: 'AI Recommendation', value: 'ai-recommendation', link: '/ai-recommendation' };

const menuItems = [
  { name: 'Popular', value: 'popular', link: '/popular' },
  { name: 'Top Rated', value: 'top-rated', link: '/top-rated' },
  { name: 'Upcoming', value: 'upcoming', link: '/upcoming' },
];

const genres = [
  { name: 'Action', value: 'action', link: '/action' },
  { name: 'Comedy', value: 'comedy', link: '/comedy' },
  { name: 'Horror', value: 'horror', link: '/horror' },
  { name: 'Romance', value: 'romance', link: '/romance' },
];

// todo - change the example logo to something else
const darkModeLogo = '/filmradar-logo-white.png';
const lightModeLogo = '/filmradar-logo-black.png';

function Sidebar({ setDesktopOpen }) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'dark' ? darkModeLogo : lightModeLogo}
          alt="logo"
        />
      </Link>
      <Divider />
      <List>
        <Link key={aiItem.value} className={classes.links} to="/">
          <ListItemButton href={aiItem.link}>
            <ListItemIcon>
              {/* fix -  */}
              <img src="https://img.icons8.com/ios/256/artificial-intelligence.png" className={classes.genreImages} height="30" />
            </ListItemIcon>
            <ListItemText primary={aiItem.name} secondary="The Official AI Tool" />
          </ListItemButton>
        </Link>
      </List>

      <Divider />
      <List>
        {menuItems.map(({ name, value, link }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItemButton href={link}>
              <ListItemIcon>
                <img src={lightModeLogo} className={classes.genreImages} height="30" />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>
          Genres
        </ListSubheader>
        {genres.map(({ name, value, link }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItemButton href={link}>
              <ListItemIcon>
                <img src={darkModeLogo} className={classes.genreImages} height="30" />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
