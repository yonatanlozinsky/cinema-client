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
    disabled?: boolean;
    flexibleWidth?: boolean;
    flexibleHeight?: boolean;
};

const ButtonWrapper = styled.button<IProps>(props =>`
    cursor: pointer;
    ${!props.flexibleHeight && `height: ${props.height};`}
    ${!props.flexibleWidth && `width: ${props.width};`}
    font-size: ${props.fontSize};
    background-color: ${props.color || props.theme.primaryColor};
    border: ${props.border};
    border-radius: ${props.borderRadius};
    
    &:hover {
        background-color: ${props.hoverColor || props.theme.secondaryColor};
    }

    ${props.disabled && `
        background-color: ${props.theme.gray};
        cursor: unset;
    `}
`);

const Button: React.FC<IProps> = (props) => {
    const { text, children } = props;
    return (
        <ButtonWrapper {...props}>
            { text || children }
        </ButtonWrapper>
    );
};


Button.defaultProps = {
    height: '20px',
    width: '50px',
    fontSize: '0.75em',
    border: 'none',
    borderRadius: '5px'
};

export default Button;