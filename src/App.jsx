import React, {memo} from 'react';
import Provider from './components/Provider.jsx';
import Canvas from './components/Canvas.jsx';
import Character from './components/Character.jsx';

const App = () => {
    return (
        <Provider>
            <Canvas />
            <Character />
        </Provider>
    );
};

export default App;
