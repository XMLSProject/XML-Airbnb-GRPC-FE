import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../service/user.service';


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
  Username?:string;
  Password?:string;

  constructor(private router: Router,private userService: UserService) {}
  
  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,Validators.pattern('^[A-Z][a-zA-Z ]+$')
    ]),
    surname: new FormControl('', [
      Validators.required,Validators.pattern('^[A-Z][a-zA-Z ]+$')
    ]),
    username: new FormControl('', [
      Validators.required,Validators.pattern('^[a-zA-Z0-9.]*$')
    ]),
    password: new FormControl('', [
      Validators.required,Validators.pattern('^[a-zA-Z0-9@$!@%^&*() ]{4,}$')
    ]),
    email: new FormControl('', [
      Validators.required,Validators.email
    ]),
    city: new FormControl('', [
      Validators.required,Validators.pattern('^[A-Z][a-zA-Z0-9 ]+$')
    ]),
  });
  
  public ngOnInit() {
    
    //const user = this.userService.getLoggedData();
    this.Name = "Name";
    this.Surname = "Surname";
    this.Email = "email@gmail.com";
    this.Username = "Username";
    this.Password = "Password";
    this.City = "Novi Sad";
  }

  public save(){
      const user:User = 
      {
      //id = this.userService.getLoggedDate().id
      id : 2,
      name :"" + this.registerForm.get('name')?.value ,
      surname :"" + this.registerForm?.get('surname')?.value,
      username :"" + this.registerForm?.get('username')?.value,
      password :"" + this.registerForm?.get('password')?.value,
      email :"" + this.registerForm?.get('email')?.value,
      //city : ""+ this.registerForm?.get('adress')?.value
      } 
      this.userService.updateUser(user)
      //this.redirectToLogin()
  }

  redirectToLogin(){
    this.router.navigate(['/app/login']);
  }

  deleteAccount(){
    if(this.userService.deleteUser())
      this.redirectToLogin();
    else console.log("cant delete account xd")
  }

}
