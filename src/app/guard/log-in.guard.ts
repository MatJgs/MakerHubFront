import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LogInGuard implements CanActivate {

  constructor(private readonly _authService:AuthService, private readonly router:Router) {
  }
  canActivate():boolean{
    if (!this._authService.isConnected)
      this.router.navigateByUrl("/login");
    return this._authService.isConnected;
  }



}
