import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LOGIN_FORM} from "../../../models/login.form";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  estInvalide:boolean=false;

  constructor(builder: FormBuilder, private readonly _authService: AuthService,private readonly router:Router) {
    this.form = builder.group(LOGIN_FORM)
  }
  ngOnInit(): void {
    sessionStorage.removeItem('user_data');
  }
  connect(): void {

    this._authService.login(this.form.value).subscribe(()=> {
      this.router.navigateByUrl("sujet")
    }
    ,
      error => this.estInvalide=true);

  }
  get isConnected(){
    return this._authService.isConnected;
  }
}
