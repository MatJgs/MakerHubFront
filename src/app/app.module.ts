import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SujetComponent } from './components/fonctions/sujet/sujet.component';

import {AppRoutingModule} from "./app-routing.modules";
import { HttpClientModule} from "@angular/common/http";
import { SujetCreateComponent } from './components/fonctions/sujet-create/sujet-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SujetDetailsComponent } from './components/fonctions/sujet-details/sujet-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArgumentCreateComponent } from './components/fonctions/argument-create/argument-create.component';
import { LoginComponent } from './components/auth/login/login.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    AppComponent,
    SujetComponent,
    SujetCreateComponent,
    SujetDetailsComponent,
    HeaderComponent,
    FooterComponent,
    ArgumentCreateComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
