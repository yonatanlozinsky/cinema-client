import styled from 'styled-components';

interface IProps {
    height?: string;
    width?: string;
    backgroundColor?: string;
    background?: string;
    boxShadow?: string;
};

const Card = styled.div<IProps>`
    height: ${props => props.height || '278px'};
    width: ${props => props.width || '185px'};
    background-color: ${props => props.backgroundColor};
`;

export default Card;
