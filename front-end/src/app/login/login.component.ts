import { AppServicesService } from './../app-services.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor( 
    public appService : AppServicesService,
    private formBuilder: FormBuilder,
    private _router: Router,
  ) { 

    this.loginForm = formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })

  }

  ngOnInit() {
  }

  // login 
  login(){
    if(this.loginForm.valid){
      let user = this.loginForm.value;
      // subscribe login method
       this.appService.login(user).subscribe( res => {
         if(res){
          if (res.status) {
            var responce = JSON.parse(res._body);
            console.log(responce);
            // set token
            if(responce){
              Cookie.set("lgnTkn", responce.token); 
              this._router.navigate(['dashboard']);
            }
          }
         }
     }, error => {
       // error handling
      if(error.status == 401){
        alert('Invalid username or password')
      }
      else{
        alert('Something went wrong!')
      }
       console.log(error);
     })
    }
    else{
      // form validation
      <any>Object.values(this.loginForm.controls).forEach(control => {
        control.markAsTouched();
    });
    }
  }

}
