import React from 'react';
import styled from 'styled-components';

interface IProps {
    text?: string;
    height?: string;
    width?: string;
    fontSize?: string;
    color?: string;
};

const ButtonWrapper = styled.button<IProps>(props =>`
    cursor: pointer;
    font-size: ${props.fontSize || '14em'};
    height: ${props.height || '20px'};
    width: ${props.width || '50px'};
    font-size: ${props.fontSize || '14em'};
    background-color: ${props.theme.primaryColor || props.color};
`);

const Button: React.FC<IProps> = (props) => {
    const { text, children } = props;
    return (
        <ButtonWrapper>
            { text || children }
        </ButtonWrapper>
    );
};

export default Button;