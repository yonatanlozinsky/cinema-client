import styled from 'styled-components';

interface IProps {
    height?: string;
    width?: string;
    backgroundColor?: string;
    background?: string;
    boxShadow?: string;
};

const Card = styled.div<IProps>`
    height: ${props => props.height};
    width: ${props => props.width};
    background-color: ${props => props.backgroundColor};
`;

Card.defaultProps = {
    height: '278px',
    width: '185px'
}

export default Card;
