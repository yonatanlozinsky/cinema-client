import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { BeatLoader } from 'react-spinners';
import popcornBg from '../../assets/popcornBg.jpg';
import { moviesSelector, moviesErrorSelector } from '../../store/selectors/movies';
import { fetchMovies } from '../../store/actionCreators';
import MovieCard from '../../components/MovieCard/MovieCard';
import { IMovie } from '../../interfaces/movie';

const Movies = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);
  const error = useSelector(moviesErrorSelector);

  useEffect(()=> {
    dispatch(fetchMovies());
  }, [dispatch]);

    return (
      <Styles.Container data-testid="movies-container">
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
          : !error && <BeatLoader color={theme.primaryColor} />
        }
      { movies && movies.results && !movies.results.length && <Styles.NoMovies>{t('errors.noMovies')}</Styles.NoMovies>}
      { error && (
        <Styles.NoMovies>
          {t('errors.generalError')}
        </Styles.NoMovies>
      ) }
      </Styles.Container>
    );
  };

export default Movies;

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

Styles.NoMovies = styled.div(props =>`
  color: ${props.theme.secondaryColor};
  width: 75%;
  font-size: 2em;
`);