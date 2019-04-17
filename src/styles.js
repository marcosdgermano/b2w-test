import styled from 'styled-components';

export const MainContainer = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const PlanetInfo = styled.div `
    position: relative;
    min-width: 400px;
    min-height: 460px;
    height: auto;
    padding: 15px;
    margin: 0 !important;
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

    @media (max-width: 596px) {
        padding-bottom: 70px;
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
    align-self: center;
    position: relative;
    width: 100px;
    height: 75px;
    margin: 30px 0 !important;
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

export const Row = styled.div `
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;

    .ui.main.text.container {
        max-width: 515px !important;
        margin: 0 40px !important;
    }
`