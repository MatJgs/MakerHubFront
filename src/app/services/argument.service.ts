import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Sujet} from "../models/sujet.model";
import {Argument} from "../models/arguments.model";

import {ArgumentForm} from "../models/argument.form";

@Injectable({
  providedIn: 'root'
})
export class ArgumentService {
  private readonly BASE_URL  = 'http://localhost:8080/arguments';
  private readonly URL = 'http://localhost:8080/sujets';
  constructor(private readonly _httpClient: HttpClient) { }

  private _argChanged=new BehaviorSubject<undefined>(undefined);

  getAll():Observable<Argument[]> {
    return this._httpClient.get<Argument[]>(this.BASE_URL);
  }
  create(form:ArgumentForm,id:number,username:string):Observable<never>{
    form.sujetId = id;
    form.userLogin= username;
    return this._httpClient.post<never>(`${this.URL}/arguments/new/${id}`,form).pipe(
      tap(()=>this._argChanged.next(undefined))
    )
  }
}
