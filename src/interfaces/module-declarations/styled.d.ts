import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        primaryColor: string;
        secondaryColor: string;
        gray: string;
        red: string;
    };
};