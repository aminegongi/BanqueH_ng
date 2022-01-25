import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrixAction } from '../Models/prix-action';

@Injectable({
  providedIn: 'root'
})
export class PrixActionService {
  private baseURL = "http://localhost:8081/prixaction";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getPrixAction(id: any): Observable<PrixAction[]> {
    return this.http.get<PrixAction[]>(this.baseURL + '/get/'+ id, this.httpOptions)
  }

  addPrixAction(id: any,PrixAction: PrixAction): Observable<PrixAction> {
    return this.http.post<PrixAction>(this.baseURL + '/addPrix/' + id,PrixAction, this.httpOptions)
  }
}
