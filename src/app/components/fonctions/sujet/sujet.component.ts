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
  sujetListNonCaché = this.sujetList;
  searchText:any;
  page: number = 1;
  count: number = 0;
  currentUser?:string = this._authService.user?.roles[0];
  estTrieEnable:boolean=false;
  estTrieChrono:boolean=true;


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
  fillSujetListNonCache(){
    let j=0;
    for (let i = 0; i < this.sujetList.length; i++) {
      if (this.sujetList[i].enable){
        this.sujetListNonCaché[j]=this.sujetList[i];
        j++;
      }


    }
  }

  ngOnInit() {
    this.afficheSujets();
    this.triParDateRecente();
    this.fillSujetListNonCache()

  }
  onTableDataChange(event: any) {
    this.page = event;
    this.afficheSujets()
  }
  triParTitre(){
    if (this.sujetList!=null){
      this.sujetList.sort(function(a, b){
        return a.titre.localeCompare(b.titre)});
    }

  }
  triParDateRecente(){
    this.estTrieChrono=false;
    if (this.sujetList!=null) {
      this.sujetList.sort(function (a, b) {
        const firstDate = new Date(a.dateCreation);
        const secondDate = new Date(b.dateCreation);

        if (firstDate > secondDate) return -1;
        if (firstDate < secondDate) return 1;
        return 0;
      });
    }
  }
  triParDateVieille(){
    this.estTrieChrono=true;
    if (this.sujetList!=null) {
      this.sujetList.sort(function (a, b) {
        const firstDate = new Date(a.dateCreation);
        const secondDate = new Date(b.dateCreation);

        if (firstDate < secondDate) return -1;
        if (firstDate > secondDate) return 1;
        return 0;
      });
    }
  }
  triParSujetEnable(){
    if (this.sujetList!=null) {
      this.estTrieEnable=false;
      this.sujetList.sort(function (a) {
        if (a.enable) return 1;
        else return -1
      });

    }
  }
  triParSujetDisable(){
    if (this.sujetList!=null) {
      this.estTrieEnable=true;
      this.sujetList.sort(function (a) {
        if (!a.enable) return 1;
        else return -1
      });

    }
  }



}
