import { Component } from '@angular/core';
import {Argument} from "../../models/arguments.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SujetsService} from "../../services/sujets.service";
import {Router} from "@angular/router";
import {SUJET_FORM} from "../../models/sujets.form";

@Component({
  selector: 'app-sujet-create',
  templateUrl: './sujet-create.component.html',
  styleUrls: ['./sujet-create.component.css']
})
export class SujetCreateComponent {

  form:FormGroup;

  constructor(
    private readonly _sujetService: SujetsService,
    private readonly _router:Router,
    builder:FormBuilder
  ) {
    this.form = builder.group(SUJET_FORM);
  }
  onSubmit(){

    if (this.form.valid){
      this._sujetService.create(this.form.value).subscribe({
        next:()=>{
          this._router.navigate(['sujet']);
        }
    } )
  }
}

}
