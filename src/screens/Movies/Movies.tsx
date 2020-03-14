import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { BeatLoader } from 'react-spinners';
import popcornBg from '../../assets/popcornBg.jpg';
import { moviesSelector } from '../../store/selectors/movies';
import { fetchMovies } from '../../store/actionCreators';
import MovieCard from '../../components/MovieCard/MovieCard';
import { IMovie } from '../../interfaces/movie';

export default () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);

  useEffect(()=> {
    dispatch(fetchMovies());
  }, [dispatch]);

    return (
      <Styles.Container>
        {movies
          ? movies.results.map((movie: IMovie) => (
            movie && <MovieCard
                key={`${movie.imdb_id}_${movie.original_title}`}
                backgroundPosterURL={movie.poster_path}
                title={movie.title}
                year={movie.release_date}
                voteAverage={movie.vote_average}
                currentMovieId={movie.id}
              />
            ))
          : <BeatLoader color={theme.primaryColor} />
        }
        {/* TODO: i18n */}
        { movies && movies.results && !movies.results.length && <div>No movies for now</div>}
      </Styles.Container>
    );
  };

const Styles: {[key: string]: React.FC} = {};

Styles.Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    background: url(${popcornBg});
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
`;