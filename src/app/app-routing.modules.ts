import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SujetComponent} from "./components/sujet/sujet.component";
import {SujetDetailsComponent} from "./components/sujet-details/sujet-details.component";
import {SujetCreateComponent} from "./components/sujet-create/sujet-create.component";
import {ArgumentCreateComponent} from "./components/argument-create/argument-create.component";



const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'sujet'},
  { path:'sujet',component:SujetComponent},
  {path:'sujet/new',component:SujetCreateComponent},
  {path:'sujet/:id',component:SujetDetailsComponent},
  {path:'sujet/:param/argument/new',component:ArgumentCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
