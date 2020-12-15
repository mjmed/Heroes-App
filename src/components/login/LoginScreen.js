import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = ( ) => {
        // history.push('/');

        // Obtengo del localStorage la última página visitada, así si el usuario hizo logout o expiró
        // su token, cuando ingrese nuevamente a la aplicación loggeado puede volver a la última página
        // dónde se encontraba trabajando
        // Uso una condicional por si acaso es la primera vez que ingresa el usuario o si se purgo
        // los datos en el localStorage
        const lastPath = localStorage.getItem( 'lastPath' ) || '/';
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Maria'
            }
        });
        
        history.replace( lastPath );
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
