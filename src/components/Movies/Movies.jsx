// import { React, useState, useEffect } from 'react';
// import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { Box, CircularProgress, Typography } from '@mui/material';
// import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

function Movies() {
  console.log('Movies');
  const { data, error, isFetching, isError } = useGetMoviesQuery();

  // Catch if there's an error
  if (isError) {
    console.log(error);
    return (
      <Box disaply="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          Pleate try again later.
        </Typography>
      </Box>
    );
  }

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box disaply="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies matching...
          <br />
          Pleate try again later.
        </Typography>
      </Box>
    );
  }
  console.log('error');

  if (isError) {
    // return 'an internal error has occured';
    console.log(error);
    return (
      <Box disaply="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          Pleate try again later.
        </Typography>
      </Box>
    );
  }

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
}

export default Movies;
