import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SujetComponent } from './components/sujet/sujet.component';

import {AppRoutingModule} from "./app-routing.modules";
import { HttpClientModule} from "@angular/common/http";
import { SujetCreateComponent } from './components/sujet-create/sujet-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SujetDetailsComponent } from './components/sujet-details/sujet-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SujetComponent,
    SujetCreateComponent,
    SujetDetailsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
