import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import jwt_decode from 'jwt-decode';
import { AllAccoInfo } from '../model/Accommodation';

interface AccommodationData {
  allAcco: Array<AllAccoInfo>;
}
interface CheckData {
  greeting: string;
}

@Injectable({
  providedIn: 'root'

})
export class UserService {



  apiHost: string = "http://localhost:8000/";
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
constructor(private http: HttpClient) { }

// getLoggedUser(): User {
  
//   return this.http.get<User[]>(this.apiHost + "my-tickets", { headers: this.headers})
// }

getToken(): any {
  const token =  localStorage.getItem("token");
   try {
     return jwt_decode(token ? token : "");
   } catch(Error) {
     return null;
   }
}

  updateUser(updateUser : User) {
    this.http.put<any>(this.apiHost + 'updateUser', updateUser, {headers: this.headers}).subscribe({
    });
  }

  deleteUser() : boolean {
    let dele: boolean = true;
    if(this.getToken().role == "Host"){
    this.http.post<AccommodationData>(this.apiHost + 'allByCreator',"", {headers : this.headers}).subscribe((data) =>{
      
      if(data.allAcco.length != 0){
        data.allAcco.forEach((element) => {
        this.http.post<CheckData>(this.apiHost + 'checkReservation', JSON.stringify(element.id) ,{ headers : this.headers}).subscribe((data) => {
            console.log("usao u check reservation")
            console.log("Data value: " + data.greeting)
            if(data.greeting === "There are reservations") {
              console.log("usao u gret")
              dele = false;
            }
            console.log(dele + " dele value")
            if(dele) {
              this.http.post<any>(this.apiHost + 'delByCreator',"" , {headers : this.headers}).subscribe({
              });
              this.http.post<any>(this.apiHost + 'deleteUser',"" ,{headers : this.headers}).subscribe({
              });
            }
        });
      });
      
      
    }
    });
  }
  else{
    this.http.post<string>(this.apiHost + 'checkForGuests',"" ,{ headers : this.headers}).subscribe((data) => {
      if(data == "There are reservations") dele = false;
      if(dele == true) {
        this.http.post<any>(this.apiHost + 'deleteUser',"" ,{headers : this.headers}).subscribe({
        });
      }
  });
  }
    
    
    return dele;
  }
 }
