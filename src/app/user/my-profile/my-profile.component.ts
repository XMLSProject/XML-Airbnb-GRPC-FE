import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../shared/model/User';


@Component({
  selector: 'app-register',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

  Name?:string;
  Surname?:string;
  Email?:string;
  City?:string;

  constructor(private router: Router) {}
  
  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,Validators.pattern('^[A-Z][a-zA-Z ]+$')
    ]),
    surname: new FormControl('', [
      Validators.required,Validators.pattern('^[A-Z][a-zA-Z ]+$')
    ]),
    email: new FormControl('', [
      Validators.required,Validators.email
    ]),
    city: new FormControl('', [
      Validators.required,Validators.pattern('^[A-Z][a-zA-Z0-9 ]+$')
    ]),
  });
  
  public ngOnInit() {
    this.Name = "Name";
    this.Surname = "Surname";
    this.Email = "email@gmail.com";
    this.City = "Novi Sad";
  }

  public save(){
      const user:User = 
      {
      name :"" + this.registerForm.get('name')?.value ,
      surname :"" + this.registerForm?.get('surname')?.value,
      username :"",
      password :"",
      email :"" + this.registerForm?.get('email')?.value,
      //city : ""+ this.registerForm?.get('adress')?.value
      } 
      //this.loginRegisterService.register(user)
      this.redirectToLogin()
  }

  redirectToLogin(){
    this.router.navigate(['/app/login']);
  }

}
