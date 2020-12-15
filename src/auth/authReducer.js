import { types } from "../types/types";


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,  // retorno los datos del usuario
                logged: true        // retorno una bandera que indica si paso la autenticación
            }         
        
        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }
}