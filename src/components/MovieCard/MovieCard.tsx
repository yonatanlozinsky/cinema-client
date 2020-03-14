import React from 'react';
import styled from 'styled-components';
import Card from '../common/Card/Card';
import { truncate } from '../../utils/strings';
import { REACT_APP_POSTER_URL } from '../../config';
import MovieActionBar from '../MovieActionBar/MovieActionBar';

interface IProps {
    backgroundPosterURL?: string;
    title: string;
    year: string;
    voteAverage: number;
    currentMovieId: number;
};

const MovieCard = (props: IProps) => {
    const { backgroundPosterURL, title, year, voteAverage, currentMovieId } = props;
    return (
        <Styles.MovieCardContainer backgroundPosterURL={backgroundPosterURL}>
            <Styles.MovieCardInfoWrapper>
                <Styles.MovieCardInfo>
                    <Styles.Title>{truncate(title, 30)}</Styles.Title>
                    <Styles.Row>
                        {/* TODO: i18n */}
                        <Styles.Field>Release Date: </Styles.Field>
                        <Styles.Value>{year}</Styles.Value>
                    </Styles.Row>
                    <Styles.Row>
                        {/* TODO: i18n */}
                        <Styles.Field>Average score: </Styles.Field>
                        <Styles.Value>{voteAverage}</Styles.Value>
                    </Styles.Row>
                    <MovieActionBar currentMovieId={currentMovieId} />
                </Styles.MovieCardInfo>
            </Styles.MovieCardInfoWrapper>
        </Styles.MovieCardContainer>
    );
};

const Styles: {[key: string]: React.FC<Partial<IProps>>} = {};

Styles.MovieCardContainer = styled(Card)`
    background: url(${(props: Partial<IProps>) => `${REACT_APP_POSTER_URL}/${props.backgroundPosterURL}`});
    margin: 5%;
    // TODO: theme
    box-shadow: 5px 6px 3px 0 rgba(0,0,0,.8), 0 1px 1px 0 rgba(0,0,0,.84), 0 2px 1px -1px rgba(0,0,0,.82);
`;

Styles.MovieCardInfoWrapper = styled.div`
    height: 100%;
    width: 100%;
    opacity: 0;
    &:hover {
        // TODO: Theme
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 1;
    }
`;

Styles.MovieCardInfo = styled.div`
    padding: 5%;
    height: 92.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

Styles.Title = styled.h2`
    color: ${props => props.theme.primaryColor};
    font-weight: bold;
    overflow: hidden;
`;

Styles.Field = styled.h5`
    color: ${props => props.theme.secondaryColor};
    font-weight: bold;
`;

Styles.Value = styled.h5``;

Styles.Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default MovieCard;
