import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

//  import the styles of material ui here..
import { useStyles } from './styles';

// import all the components here
import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="movie/:id" element={<MovieInformation />} />
          <Route path="actors/:id" element={<Actors />} />
          <Route path="profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
