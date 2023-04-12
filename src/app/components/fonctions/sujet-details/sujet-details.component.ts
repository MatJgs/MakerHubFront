import {Component, OnInit} from '@angular/core';
import {Sujet} from "../../../models/sujet.model";
import {SujetsService} from "../../../services/sujets.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Argument} from "../../../models/arguments.model";
import {ArgumentService} from "../../../services/argument.service";

@Component({
  selector: 'app-sujet-details',
  templateUrl: './sujet-details.component.html',
  styleUrls: ['./sujet-details.component.css']
})
export class SujetDetailsComponent implements OnInit{

  sujet!:Sujet;
  arguments!:Argument[];

  loading= true;

  constructor(
    private readonly _sujetService:SujetsService,
    private readonly _activatedRouter:ActivatedRoute,
    private readonly _argumentService:ArgumentService,
    private readonly _router:Router
  ) {
  }

  ngOnInit() {

    const sujetID = this._activatedRouter.snapshot.params['id'];

    this._sujetService.getOne(sujetID).subscribe({
      next:(sujet)=>{
        this.sujet=sujet;
        this.loading = false;

      },
      error:()=>{
        this._router.navigate(['/sujet']);
      }
    })

  }

}
