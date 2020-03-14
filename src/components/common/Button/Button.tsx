import React from 'react';
import styled from 'styled-components';

interface IProps {
    text?: string;
    height?: string;
    width?: string;
    fontSize?: string;
    color?: string;
    onClick?: () => void;
    border?: string;
    borderRadius?: string;
    hoverColor?: string;
};

const ButtonWrapper = styled.button<IProps>(props =>`
    cursor: pointer;
    height: ${props.height || '20px'};
    width: ${props.width || '50px'};
    font-size: ${props.fontSize || '0.75em'};
    background-color: ${props.color || props.theme.primaryColor};
    border: ${props.border || 'none'};
    border-radius: ${props.borderRadius || '5px'};

    &:hover {
        background-color: ${props.hoverColor || props.theme.secondaryColor};
    }
`);

const Button: React.FC<IProps> = (props) => {
    const { text, children, onClick } = props;
    return (
        <ButtonWrapper onClick={onClick}>
            { text || children }
        </ButtonWrapper>
    );
};

export default Button;