import React from 'react';
import { FilmImage } from '../styles';

const ResizeImg = () => {
    
}

const App = (props) => {
    return (
        <FilmImage 
              title={props.title}
              src={props.src} 
              alt=""
        />
    );
}

export default App;