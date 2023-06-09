import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {LoginForm} from "../models/login.form";

export interface Auth{
  token:string,
  refreshToken:string;
  username:string;
  roles:string[];

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly BASE_URL = "http://localhost:8080/api/auth";
  private readonly AUTH_STORAGE_KEY = "user_data";

  constructor( private readonly _client: HttpClient) { }

  login(form: LoginForm): Observable<Auth> {
    return this._client.post<Auth>(`${this.BASE_URL}/login`, form).pipe(
      tap(data => {
        this.user = data;

      })
    )
  }
  logout() {
    this.user = undefined;
  }
  private set user(user: Auth | null | undefined) {
    if (!user)
      sessionStorage.removeItem(this.AUTH_STORAGE_KEY);

    sessionStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(user));
  }

  get user(): Auth | undefined {
    const userJson = sessionStorage.getItem(this.AUTH_STORAGE_KEY)
    if (userJson) {
      return JSON.parse(userJson);
    }

    return undefined;
  }

  get isConnected(){
    return this.user!= undefined;
  }
}
