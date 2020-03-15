import green from './green';
import orange from './orange';
import { DefaultTheme } from 'styled-components';

const themes: {[key: string]: DefaultTheme} =  {
    orange,
    green
};

export default themes;

export type themeTypes = keyof typeof themes;
