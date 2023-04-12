import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Sujet} from "../models/sujet.model";
import {SujetForm} from "../models/sujets.form";

@Injectable({
  providedIn: 'root'
})
export class SujetsService {

  private readonly BASE_URL  = 'http://localhost:8080/sujets'
  constructor(private readonly _httpClient: HttpClient) { }

  private _sujetChanged=new BehaviorSubject<undefined>(undefined);



  getAll():Observable<Sujet[]> {
    return this._httpClient.get<Sujet[]>(this.BASE_URL);
  }
  getOne(id:number){
    return this._httpClient.get<Sujet>(`${this.BASE_URL}/${id}`);
  }
  create(form:SujetForm,username:string):Observable<never>{
    form.userLogin = username;
    return this._httpClient.post<never>(this.BASE_URL+'/new',form).pipe(
      tap(()=>this._sujetChanged.next(undefined))
    )
  }


}
