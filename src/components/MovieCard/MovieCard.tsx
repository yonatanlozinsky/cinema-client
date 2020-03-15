import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
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
    
    const { t } = useTranslation();

    return (
        <Styles.MovieCardContainer backgroundPosterURL={backgroundPosterURL}>
            <Styles.MovieCardInfoWrapper>
                <Styles.MovieCardInfo>
                    <Styles.Title>{truncate(title, 30)}</Styles.Title>
                    <Styles.Row>
                        <Styles.Field>{t('editForm.releaseDate')}</Styles.Field>
                        <Styles.Value>{year}</Styles.Value>
                    </Styles.Row>
                    <Styles.Row>
                        <Styles.Field>{t('editForm.rating')}</Styles.Field>
                        <Styles.Value>{voteAverage}</Styles.Value>
                    </Styles.Row>
                    <MovieActionBar currentMovieId={currentMovieId} />
                </Styles.MovieCardInfo>
            </Styles.MovieCardInfoWrapper>
        </Styles.MovieCardContainer>
    );
};

const Styles: {[key: string]: React.FC<Partial<IProps>>} = {};

interface IMovieCardContainerProps {
    backgroundPosterURL?: string;
};

Styles.MovieCardContainer = styled(Card)`
    background: url(${(props: IMovieCardContainerProps) =>`${REACT_APP_POSTER_URL}${props.backgroundPosterURL}`});
    margin: 5%;
    box-shadow: ${props => props.theme.boxShadow};
`;

Styles.MovieCardInfoWrapper = styled.div`
    height: 100%;
    width: 100%;
    opacity: 0;
    &:hover {
        background-color: ${props => props.theme.cardOverlay};
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
