import React from 'react';
import styled from 'styled-components';
import Card from '../common/Card/Card';
import { REACT_APP_POSTER_URL } from '../../config';
import MovieActionBar from '../MovieActionBar/MovieActionBar';

interface IProps {
    backgroundPosterURL?: string;
    title: string;
    year: string;
    voteAverage: number;
    currentMovieId: number;
};

const MovieCardContainer = styled(Card)`
    background: url(${(props: Partial<IProps> ) => `${REACT_APP_POSTER_URL}/${props.backgroundPosterURL}`});
    margin: 5%;
    // TODO: theme
    box-shadow: 5px 6px 3px 0 rgba(0,0,0,.8), 0 1px 1px 0 rgba(0,0,0,.84), 0 2px 1px -1px rgba(0,0,0,.82);
`;

const MovieCardInfo = styled.div`
    height: 100%;
    width: 100%;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 1;
    }
`;


const MovieCard = (props: IProps) => {
    const { backgroundPosterURL, title, year, voteAverage, currentMovieId } = props;
    return (
        <MovieCardContainer backgroundPosterURL={backgroundPosterURL}>
            <MovieCardInfo>
                <div>{title}</div>
                <div>{year}</div>
                <div>{voteAverage}</div>
                <MovieActionBar currentMovieId={currentMovieId} />
            </MovieCardInfo>
        </MovieCardContainer>
    );
};


export default MovieCard;
