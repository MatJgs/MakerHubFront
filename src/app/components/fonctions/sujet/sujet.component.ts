import {Component, OnInit} from '@angular/core';
import {Sujet} from "../../../models/sujet.model";
import {SujetsService} from "../../../services/sujets.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent implements OnInit{

  sujetList!:Sujet[];
  searchText:any;
  page: number = 1;

  count: number = 0;
  currentUser?:string = this._authService.user?.roles[0];


  constructor(private readonly _sujetService:SujetsService,private readonly _authService: AuthService,) {
  }
  afficheSujets():void{
    this._sujetService.getAll().subscribe({
      next:data => {
        this.sujetList = data;

      },
      error:console.error
    });
  }

  ngOnInit() {
    this.afficheSujets();
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.afficheSujets();
  }




}
