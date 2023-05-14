import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acommodation } from '../model/AcommodationModel';

@Injectable({
  providedIn: 'root'
})
export class AcommodationService {

  apiHost: string = "http://localhost:8000/" //host za AcommodationDB, za login i reservations je drugaciji
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllAcommodations(): Observable<Acommodation[]> {
    return this.http.get<Acommodation[]>(this.apiHost + 'allAcco', {headers: this.headers});
  }
  
  createAcommodation(acommodation: Acommodation): Observable<Acommodation> {
    return this.http.post<Acommodation>(this.apiHost + 'createAcco', acommodation, {headers: this.headers});
  }

}
