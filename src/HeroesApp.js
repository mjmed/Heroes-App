import React, { useEffect, useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';


// Para el estado inicial busco en el localStorage si existe un usuario, en tal caso
// lo retorna, si no retorna un estado logout o logged en false
const init = () => {
    return JSON.parse( localStorage.getItem('user') ) || { logged: false };
};

export const HeroesApp = () => {

    const [ user, dispatch ] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify( user ))
    }, [ user ])

    return (

        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

