import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => {
    return (
        <div>
            <h1>Hello, Webpack!</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));