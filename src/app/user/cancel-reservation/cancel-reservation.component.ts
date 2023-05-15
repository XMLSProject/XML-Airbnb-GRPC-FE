import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllReservationInfo } from 'src/app/admin/model/AllReservationInfo';
import { UserService } from '../service/user.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.css']
})
export class CancelReservationComponent {

  constructor(private router: Router,private userService: UserService) {}
  public reservationList: AllReservationInfo[] = [];
  public reservationListTwo: AllReservationInfo[] = [];
  
  getToken(): any {
    const token =  localStorage.getItem("token");
     try {
       return jwt_decode(token ? token : "");
     } catch(Error) {
       return null;
     }
  }
  public ngOnInit() {
    this.reservationListFunction();
  }

  public reservationListFunction(){
    this.userService.resListFunction().subscribe((result) => {
      console.log(result)
      result.forEach(element=>{
        this.reservationList.push(element)
      })
      this.reservationList.forEach(element=>{
        if(element.allAcco[0] != undefined && element.allAcco[0].guestUsername == this.getToken().username && element.allAcco[0].accepted == "1")
        this.reservationListTwo.push(element)
      })
      console.log(this.reservationList)
    });
  }
  public cancel(id : string){
    this.userService.cancelRes(id)
  }

}
