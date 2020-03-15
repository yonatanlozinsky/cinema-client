import green from './green';
import orange from './orange';

const themes =  {
    orange,
    green
};

export default themes;

export type themeTypes = keyof typeof themes;
