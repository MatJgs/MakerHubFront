import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SujetComponent} from "./components/fonctions/sujet/sujet.component";
import {SujetDetailsComponent} from "./components/fonctions/sujet-details/sujet-details.component";
import {SujetCreateComponent} from "./components/fonctions/sujet-create/sujet-create.component";
import {ArgumentCreateComponent} from "./components/fonctions/argument-create/argument-create.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {LogInGuard} from "./guard/log-in.guard";



const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'sujet',children:[
      {path:'',component:SujetComponent,pathMatch:'full'},
      {path:'new',component:SujetCreateComponent},
      {path:':id',component:SujetDetailsComponent},
      {path:':param/argument/new',component:ArgumentCreateComponent},
    ],
    canActivate:[LogInGuard]
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
