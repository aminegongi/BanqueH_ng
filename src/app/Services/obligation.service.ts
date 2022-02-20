import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Obligation } from '../Models/obligation';

@Injectable({
  providedIn: 'root'
})
export class ObligationService {
  private baseURL = "http://localhost:8081/obligation";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  
  getAllObligations(): Observable<Obligation[]> {
    return this.http.get<Obligation[]>(this.baseURL + '/getAll', this.httpOptions)
  }

  getObligation(id: any): Observable<Obligation> {
    return this.http.get<Obligation>(this.baseURL + '/get/'+ id, this.httpOptions)
  }
  addObligation(Obligation: Obligation): Observable<Obligation> {
    return this.http.post<Obligation>(this.baseURL + '/add/',Obligation, this.httpOptions)
  }
  updateObligation(Obligation: Obligation): Observable<Obligation> {
    return this.http.put<Obligation>(this.baseURL + '/edit/', Obligation, this.httpOptions)
  }

  deleteObligationById(id: number) {
    console.log(id)
    return this.http.delete(this.baseURL + '/delete/' + id, this.httpOptions)
  }


}
