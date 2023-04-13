import {Component, OnInit} from '@angular/core';
import {Sujet} from "../../../models/sujet.model";
import {SujetsService} from "../../../services/sujets.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Argument} from "../../../models/arguments.model";
import {ArgumentService} from "../../../services/argument.service";
import {AuthService} from "../../../services/auth.service";
import {Utilisateur} from "../../../models/utilisateur.model";

@Component({
  selector: 'app-sujet-details',
  templateUrl: './sujet-details.component.html',
  styleUrls: ['./sujet-details.component.css']
})
export class SujetDetailsComponent implements OnInit{

  sujet!:Sujet;
  arguments!:Argument[];
  page: number = 1;
  count: number = 0;

  loading= true;

  currentUser?:string = this._authService.user?.roles[0];

  constructor(
    private readonly _sujetService:SujetsService,
    private readonly _activatedRouter:ActivatedRoute,
    private readonly _argumentService:ArgumentService,
    private readonly _authService: AuthService,
    private readonly _router:Router
  ) {
  }

  ngOnInit() {

    this.load();

  }
  onTableDataChange(event: any) {
    this.page = event;

  }

  cloture(){
      if (this.currentUser=='ROLE_TECHNOBEL'){
        const sujetID = this._activatedRouter.snapshot.params['id'];
        this._sujetService.cloture(sujetID,this._authService.user!.username).subscribe(()=>this.load());

      }

  }
  cacher(){
    if (this.currentUser=='ROLE_TECHNOBEL'){
      const sujetID = this._activatedRouter.snapshot.params['id'];
      this._sujetService.cacher(sujetID,this._authService.user!.username).subscribe(()=>this.load());

    }
  }
  load(){
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
