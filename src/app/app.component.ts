import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './models/reducer';

import * as fromMensaje from './Actions/mensaje.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public texto: string;
  public datos$: Observable<any>;
  constructor(
    private store: Store<AppState>
  ){
    // Solucionar error
    // https://www.youtube.com/watch?v=xrxfTjVfhrQ&list=PLK7sa90aSLe6oztRkGK75Utuyxsi3Ir60&index=4&t=0s
    this.datos$ = this.store.select('mensaje');
  }
  ngOnInit(): void {
    // this.store.select('mensaje').subscribe(res => {
    //   this.texto = res.texto;
    // });
    console.log();
  }

  spanishMessage(){
    const action  = new fromMensaje.SpanishMensaje('Hola');
    this.store.dispatch(action);

  }
  englishMessage(){

    const action  = new fromMensaje.EnglishMensaje('Colores');
    this.store.dispatch(action);
  }
}
