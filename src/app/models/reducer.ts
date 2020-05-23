import { Action } from '@ngrx/store';
import * as fromMensaje from '../Actions/mensaje.action';


export interface AppState {
    mensaje: Body;
}

export interface Body {
    texto: string;
}

export const initialState = {
    mensaje: {
        texto: 'Hola profe'
    }
}

export function Reducer(state: AppState = initialState, action: fromMensaje.MensajeActions) {
    console.log(action);

    switch (action.type) {
        case fromMensaje.SPANISH:
            return {
                ...state,
                texto: action.payload
            };
        case fromMensaje.ENGLISH:
            return {
                ...state,
                texto: action.payload
            };
        default:
            return state.mensaje;
    }
}
