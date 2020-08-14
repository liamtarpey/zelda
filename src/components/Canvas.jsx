import React, {forwardRef} from 'react';
import {useProvider} from './Provider.jsx';

const Canvas = () => {
    const {canvas} = useProvider();
    return (
        <canvas width="600" height="400" ref={canvas}></canvas>
    );
};

export default Canvas;
