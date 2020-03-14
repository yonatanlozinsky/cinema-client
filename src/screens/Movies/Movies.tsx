import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { BeatLoader } from 'react-spinners';
import { moviesSelector } from '../../store/selectors/movies';
import { fetchMovies } from '../../store/actionCreators';
import MovieCard from '../../components/MovieCard/MovieCard';
import * as Styles from './styles';
import { IMovie } from '../../interfaces/movie';

export default () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);

  useEffect(()=> {
    dispatch(fetchMovies());
  }, []);

    return (
      <Styles.Container>
        {movies
          ? movies.results.map((movie: IMovie, index: number) => (
            movie && <MovieCard
                key={`${movie.imdb_id}_${index}`}
                backgroundPosterURL={movie.poster_path}
                title={movie.title}
                year={movie.release_date}
                voteAverage={movie.vote_average}
              />
            ))
          : <BeatLoader color={theme.primaryColor} />
        }
      </Styles.Container>
    );
  };
