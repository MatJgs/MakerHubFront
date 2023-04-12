import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private readonly _authService:AuthService,private readonly router:Router) {
  }
  logout() {
    sessionStorage.removeItem('user_data');
    this.router.navigateByUrl("login");
  }
  isConnected(){
    return this._authService.isConnected;
  }

  ngOnInit(): void {

  }
}
