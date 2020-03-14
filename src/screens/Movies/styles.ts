import styled from 'styled-components';
import popcornBg from '../../assets/popcornBg.jpg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    background: url(${popcornBg});
    background-size: contain;
    background-attachment: fixed;
    min-height: 100vh;
`;