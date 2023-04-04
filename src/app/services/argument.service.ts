import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Sujet} from "../models/sujet.model";
import {Argument} from "../models/arguments.model";

@Injectable({
  providedIn: 'root'
})
export class ArgumentService {
  private readonly BASE_URL  = 'http://localhost:8080/arguments'
  constructor(private readonly _httpClient: HttpClient) { }


  getAll():Observable<Argument[]> {
    return this._httpClient.get<Argument[]>(this.BASE_URL);
  }
}
