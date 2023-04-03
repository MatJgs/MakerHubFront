import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SujetComponent} from "./components/sujet/sujet.component";
import {SujetDetailsComponent} from "./components/sujet-details/sujet-details.component";
import {SujetCreateComponent} from "./components/sujet-create/sujet-create.component";



const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'sujet'},
  { path:'sujet',component:SujetComponent},
  {path:'sujet/create',component:SujetCreateComponent},
  {path:'sujet/:id',component:SujetDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
