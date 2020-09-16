import { APIResponse } from './../../../core/auth/auth.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  errorMessage: string = null;
  alert = false;

  constructor(private router: Router, private AuthService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    // console.log("login form:",loginForm.valid)
    // console.log("login form:",loginForm.value)
    if(!loginForm.valid){
      return
    }
    let loginRes: Observable<APIResponse>;
    const email: string = loginForm.value.email;
    const password: string = loginForm.value.password;
    this.isLoading = true;

    loginRes = this.AuthService.login(email, password);
    loginForm.reset();

    loginRes.subscribe(
      res => {
      console.log("login response: ",res)
      this.isLoading = false;
      this.router.navigate(['/home'])
    },
    error => {
      console.log("errorRes: ",error)
      this.errorMessage = error;
      console.log("errorMessage: ",this.errorMessage)
      this.alert = true;
      this.isLoading = false;
    })
  }
  
  alertClose() {
    this.alert = false;
  }

}
