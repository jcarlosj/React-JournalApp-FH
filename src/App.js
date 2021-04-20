import React from 'react';
import { Provider } from 'react-redux';     //  Provider (es un HOC) cumple la misma funcion que el Context de React.

/** Routers */
import { AppRouter } from './routers/AppRouter';

/** Store de Redux */
import { store } from './store/store';

const App = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    );
}

export default App;
