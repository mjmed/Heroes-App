import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';


describe('Pruebas en <LoginScreen /> ', () => {

    const history = {
        replace: jest.fn(),
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Maria'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <LoginScreen history={ history } />
            </MemoryRouter>
        </AuthContext.Provider>
    );
   
    test('debe mostrarse correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de realizar el dispatch y la navegación ', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Maria'
            }
        });

        expect( history.replace ).toHaveBeenCalled();

    });

    // Simulación del localStorage
    test('debe de guardar en el localStorage ', () => {
        
        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Maria'
            }
        });

        expect( history.replace ).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/dc');
        handleClick();
        expect( history.replace ).toHaveBeenCalledWith('/dc');

    });
    
});
