import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PublicRoute } from '../../routers/PublicRoute';


describe('Pruebas en <PublicRoute />', () => {

    test('debe de mostrar el componente si no está autenticado ', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute
                    isAuthenticated={ false }
                    component={ () => <span>Hola Mundo!</span> }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists()).toBe( true )

    });
    
});
