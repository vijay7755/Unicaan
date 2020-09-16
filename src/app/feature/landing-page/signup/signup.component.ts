import { APIResponse } from './../../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  errorMessage: string = null;
  alert = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(signForm: NgForm) {
    // console.log("onsubmit signup form: ",signForm.valid)
    // console.log("name: ",signForm.value)
    if(!signForm.valid){
      return
    }
    let signupRes: Observable<APIResponse>;
    const email:string = signForm.value.email;
    const password:string = signForm.value.password;

    signupRes = this.authService.signUp(email, password)
    signForm.reset();
    signupRes.subscribe(res => {
      console.log("signup response: ",res)
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
