import {Action, createAction, props} from '@ngrx/store';
import { Spanish } from '../models/spanish';

export const SPANISH = '[mensaje] Spanish';
export const ENGLISH = '[mensaje] English';

export class SpanishMensaje implements Action{
    readonly type = SPANISH;

    constructor(public payload: string){
    }
}
export const spanishMensaje = createAction(
    '[mensaje] Spanish',
    props<{spanish: Spanish}>()
);

export class EnglishMensaje implements Action{
    readonly type = ENGLISH;

    constructor(public payload: string){
    }
}

export const englishMensaje = createAction(
    '[mensaje] Spanish',
    props<{spanish: Spanish}>()
);

export type MensajeActions = SpanishMensaje |
                            EnglishMensaje ;
