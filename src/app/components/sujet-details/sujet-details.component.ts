import {Component, OnInit} from '@angular/core';
import {Sujet} from "../../models/sujet.model";
import {SujetsService} from "../../services/sujets.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sujet-details',
  templateUrl: './sujet-details.component.html',
  styleUrls: ['./sujet-details.component.css']
})
export class SujetDetailsComponent implements OnInit{

  sujet!:Sujet;

  constructor(
    private readonly _sujetService:SujetsService,
    private readonly _activatedRouter:ActivatedRoute,
    private readonly _router:Router
  ) {
  }

  ngOnInit() {
    const sujetID = this._activatedRouter.snapshot.params['id'];

    this._sujetService.getOne(sujetID).subscribe({
      next:(sujet)=>{
        this.sujet=sujet;
      },
      error:()=>{
        this._router.navigate(['/sujet']);
      }
    })
  }

}
