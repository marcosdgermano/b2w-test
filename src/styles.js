import styled from 'styled-components';

export const MainContainer = styled.div ``;

export const PlanetInfo = styled.div `
    position: relative;
    top: 30px;
    left: 425px;
    height: 420px;
    width: 400px !important;
    border: 3px solid #000;
    border-radius: 9%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    div.innerContent {
        position: relative;
        top: 30px;
    }

    h1, h2 {
        text-align: center;
        margin-block-start: 0.5em !important;
        margin-block-end: 0.5em !important;
    }
`;

export const Header = styled.h1 `
    position: relative;
    top: 20px;
    font-size: 4rem !important;
`;