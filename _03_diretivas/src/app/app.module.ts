import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { TesteScssComponent } from './teste-scss/teste-scss.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    TesteScssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
