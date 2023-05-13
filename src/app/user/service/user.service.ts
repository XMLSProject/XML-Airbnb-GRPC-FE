import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiHost: string = "http://localhost:8081/";
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
constructor(private http: HttpClient) { }

//getLoggedUser(): {
  
  //return this.http.get<Ticket[]>(this.apiHost + "my-tickets", { headers: this.headers})
//}
}
