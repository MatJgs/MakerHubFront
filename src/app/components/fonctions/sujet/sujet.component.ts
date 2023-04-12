import {Component, OnInit} from '@angular/core';
import {Sujet} from "../../../models/sujet.model";
import {SujetsService} from "../../../services/sujets.service";

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent implements OnInit{

  sujetList!:Sujet[];

  constructor(private readonly _sujetService:SujetsService) {
  }

  ngOnInit() {
    this._sujetService.getAll().subscribe({
      next:data => {
        this.sujetList = data;

      },
      error:console.error
    })
  }


}
