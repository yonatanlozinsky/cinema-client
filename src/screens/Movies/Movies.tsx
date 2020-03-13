import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesSelector } from '../../store/selectors/movies';
import { fetchMovies } from '../../store/actionCreators';

export default () => {
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);

  useEffect(()=> {
    dispatch(fetchMovies());
  }, []);

    return (
      <div>
        {movies && JSON.stringify(movies.results)}
      </div>
    );
  };
