import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SujetsService} from "../../../services/sujets.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ArgumentService} from "../../../services/argument.service";
import {ARGUMENT_FORM} from "../../../models/argument.form";
import {Sujet} from "../../../models/sujet.model";
import {Argument} from "../../../models/arguments.model";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-argument-create',
  templateUrl: './argument-create.component.html',
  styleUrls: ['./argument-create.component.css']
})
export class ArgumentCreateComponent implements OnInit{

  sujet!:Sujet;
  form: FormGroup;
  sujetID?:number;
  argument!:Argument;
  username?:string;


  constructor(
    private readonly _argumentService: ArgumentService,
    private readonly _activatedRouter: ActivatedRoute,
    private readonly _sujetService:SujetsService,
    private readonly _router: Router,
    private readonly _authService:AuthService,
    builder: FormBuilder
  ) {
    this.form = builder.group(ARGUMENT_FORM);
  }
  ngOnInit(){
    this.sujetID=this._activatedRouter.snapshot.params['param'];

    this._sujetService.getOne(this.sujetID!).subscribe({
      next: (sujet)=> this.sujet=sujet,

    })
  }

  onSubmit() {

    if (this.form.valid) {
      this.username=this._authService.user?.username;
      this._argumentService.create(this.form.value,this.sujetID!,this.username!).subscribe({
        next: () => {
          this._router.navigate(['sujet/',this.sujetID]);

        }
      })
    }
  }
}
