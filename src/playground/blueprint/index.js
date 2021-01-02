import React from 'react';
import {render} from 'react-dom';
import './styles.scss';

export const App = () => {
    return (
        <div className="container">
            <h2>Playground Module Sandbox</h2>
        </div>
    )
}

render(<App />, document.querySelector(".app"));