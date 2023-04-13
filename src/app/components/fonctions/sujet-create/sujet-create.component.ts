import {Component, OnInit} from '@angular/core';
import {Argument} from "../../../models/arguments.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SujetsService} from "../../../services/sujets.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SUJET_FORM} from "../../../models/sujets.form";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-sujet-create',
  templateUrl: './sujet-create.component.html',
  styleUrls: ['./sujet-create.component.css']
})
export class SujetCreateComponent implements OnInit{

  form:FormGroup;
  username?:string;

  constructor(
    private readonly _sujetService: SujetsService,
    private readonly _router:Router,
    private readonly _activatedRouter:ActivatedRoute,
    private readonly _authService:AuthService,
    builder:FormBuilder
  ) {
    this.form = builder.group(SUJET_FORM);
  }

  ngOnInit(): void {

    }
  onSubmit(){
    if (this.form.valid){

      this.username=this._authService.user?.username;

      this._sujetService.create(this.form.value,this.username!).subscribe({
        next:()=>{
          this._router.navigate(['sujet']);
        }
    } )
  }

  }

}
