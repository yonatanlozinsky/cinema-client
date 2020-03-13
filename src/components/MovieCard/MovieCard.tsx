import styled from 'styled-components';
import Card from '../common/Card/Card';
import { REACT_APP_POSTER_URL } from '../../config';

interface IProps {
    backgroundPosterURL?: string
};

const MovieCard = styled(Card)`
    background: url(${(props: IProps) => `${REACT_APP_POSTER_URL}/${props.backgroundPosterURL}`});
`;

export default MovieCard;
