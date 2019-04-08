import { AppServicesService } from './../app-services.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;  

  constructor(
    public appService : AppServicesService,
    private formBuilder: FormBuilder,
    private _router: Router,
  ) { 
    this.registrationForm = formBuilder.group({
      'fullName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'mobileNumber': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  // submit user details
  registerUser(){
    if(this.registrationForm.valid){
      let userDetails = this.registrationForm.value;
      // subscribe register method
       this.appService.register(userDetails).subscribe( res => {
         if(res){
          alert(' Register Successfully');
          this._router.navigate(['login']);
         }
     }, error => {
       // error handling
       if(error.status == 409){
         alert('Email Id already exits')
       }
       else{
         alert('Something went wrong!')
       }
        console.log(error);
     })
    }
    else{
      // form validation
      <any>Object.values(this.registrationForm.controls).forEach(control => {
        control.markAsTouched();
    });
    }
  }

}
