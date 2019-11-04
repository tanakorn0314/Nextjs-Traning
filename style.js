//global style
import css from 'styled-jsx/css';

const styles = css.global`
    @font-face {
        font-family: Roboto;
        src: url(/static/fonts/Roboto-Regular.ttf);
        font-weight: 400;
    }
    @font-face {
        font-family: Roboto;
        src: url(/static/fonts/Roboto-Light.ttf);
        font-weight: 200;
    }
    body {
        margin: 0;
        font-family: 'Roboto';
    }
`;

export default styles;