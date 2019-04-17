import styled from 'styled-components';

export const MainContainer = styled.div ``;

export const PlanetInfo = styled.div `
    position: relative;
    top: 30px;
    height: 460px;
    width: 480px !important;
    /* border: 2px solid #ececec; */
    border-radius: 10%;
    box-shadow: 0 5px 9px rgba(0, 0, 0, 1);

    div.dimmer {
        border-radius: 9%;
        height: 100%;
        width: 100%;
    }

    div.innerContent {
        position: relative;
        top: 30px;
    }

    h2, p {
        position: relative;
        text-align: center;
        margin-block-start: 0.3em !important;
        margin-block-end: 0.3em !important;
    }
    p {
        font-style: italic;
        display: -webkit-inline-box;
        font-size: 1.7rem !important;
    }
`;

export const Header = styled.h1 `
    position: relative;
    text-align: center;
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
    box-shadow: 0 1px 7px rgba(0, 0, 0, 1) !important;
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