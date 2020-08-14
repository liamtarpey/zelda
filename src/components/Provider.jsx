import React, { createContext, createRef, useContext, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

// Context
export const GameContext = createContext({});

const Provider = ({ children }) => {

    const canvas = createRef();
    let ctx = null;

    // Init CTX
    useEffect(() => {
        ctx = canvas.current.getContext('2d');
    });

    const value = useCallback(() => ({
        foo: 'bar',
        canvas,
        ctx
    }));

    return (
        <GameContext.Provider value={value()}>
            {children}
        </GameContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.object.isRequired
};

// Exports
export default Provider;
export function useProvider() {
    return useContext(GameContext);
}
