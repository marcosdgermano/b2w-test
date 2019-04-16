import styled from 'styled-components';

export const MainContainer = styled.div ``;

export const PlanetInfo = styled.div `
    position: relative;
    top: 30px;
    height: 460px;
    width: 480px !important;
    border: 3px solid #000;
    border-radius: 9%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 1);

    div.dimmer {
        border-radius: 9%;
        height: 100%;
        width: 100%;
    }

    div.innerContent {
        position: relative;
        top: 30px;
    }

    h1, h2, h3 {
        position: relative;
        text-align: center;
        margin-block-start: 0.5em !important;
        margin-block-end: 0.5em !important;
    }
`;

export const Header = styled.h1 `
    position: relative;
    top: 20px;
    font-size: 4rem !important;
    font-family: 'black_capsregular', Arial, sans-serif;
`;

export const Film = styled.p `
    position: relative;
    font-style: italic;
    display: inline-block;
    font-size: 1rem;
`

export const NextButton = styled.button `
    position: relative;
    width: 100px;
    height: 75px;
    top: 200px;
`

export const FilmImage = styled.img `
    width: 60px;
    height: 90px;
    margin: 2.5px;

    &:hover {
        transition: transform .32s ease;
        transform: scale(2.5);
    }
`