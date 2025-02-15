import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogementsComponent } from './logements/logements.component';
//import { LogementsComponent } from './components/logement-list/logement-list.component';  // Corrigez le nom du composant

@NgModule({
  declarations: [
    AppComponent,
    LogementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
