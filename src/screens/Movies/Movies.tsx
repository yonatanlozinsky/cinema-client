import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { moviesSelector } from '../../store/selectors/movies';
import { fetchMovies } from '../../store/actionCreators';
import MovieCard from '../../components/MovieCard/MovieCard';
import { IMovie } from '../../interfaces/movie';

export default () => {
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);

  useEffect(()=> {
    dispatch(fetchMovies());
  }, []);

    return (
      <div>
        {movies
          ? movies.results.map((movie: IMovie, index: number) => (
            <MovieCard key={`${movie.imdb_id}_${index}`} backgroundPosterURL={movie.poster_path} />
            ))
          : <BeatLoader color={"#05c46b"} />
        }
      </div>
    );
  };
