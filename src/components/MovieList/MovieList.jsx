import React from 'react';
import { Grid } from '@mui/material';

import { useStyles } from './styles';
import Movie from '../Movie/Movie';

function MovieList({ movies }) {
  console.log('Movie-List');

  const classes = useStyles();

  console.log(movies);

  return (
    <Grid container className={classes.moviesContainer}>
      {
        movies.results.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))
      }
    </Grid>
    // <div>
    //   {
    //     movies.results.map((movie, i) => (
    //       <Movie key={i} movie={movie} i={i} />
    //     ))
    //   }
    // </div>
  );
}

export default MovieList;
