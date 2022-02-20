import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '../Models/action';

@Injectable({
  providedIn: 'root'
})
export class PortefeuilleService {
  private baseURL = "http://localhost:8081/"; //portefeuille
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getAllActions(): Observable<Action[]> {
    return this.http.get<Action[]>(this.baseURL + 'action/getAll', this.httpOptions)
  }

  getPrixAction(id: any): Observable<any> {
    return this.http.get(this.baseURL + 'prixaction/getAct/' + id , this.httpOptions)
  }

  
}

