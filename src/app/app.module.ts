import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ngrx modulos
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { Reducer } from './models/reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        mensaje: Reducer
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 6
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
