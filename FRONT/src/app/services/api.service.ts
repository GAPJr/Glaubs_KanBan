import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from 'src/shared/card';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private REST_API_SERVER = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {}

  public authorization!: string;

  public getAuthorizationToken(): Observable<any> {
    const url = this.REST_API_SERVER + '/login/';
    const msgBody = { login: 'letscode', senha: 'lets@123' };
    const headers = { 'Content-Type': 'application/json' };
    const options = { headers: headers };
    const resp = this.httpClient.post(url, msgBody, options);
    return resp;
  }

  public setAuthorizationToken(token: string) {
    this.authorization = 'Bearer ' + token;
  }

  public createNewCard(card: Card): Observable<any> {
    const url = this.REST_API_SERVER + '/cards/';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.authorization,
    };
    const options = { headers: headers };
    const resp = this.httpClient.post(url, card, options);
    return resp;
  }

  public getAllCards(): Observable<any> {
    const url = this.REST_API_SERVER + '/cards/';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.authorization,
    };
    const options = { headers: headers };
    const resp = this.httpClient.get(url, options);
    console.log(url, options);
    return resp;
  }

  public changeCardById(card: Card): Observable<any> {
    const url = this.REST_API_SERVER + '/cards/' + card.id;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.authorization,
    };
    const options = { headers: headers };
    const resp = this.httpClient.put(url, card, options);
    return resp;
  }

  public deleteCardById(id: string): Observable<any> {
    const url = this.REST_API_SERVER + '/cards/' + id;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.authorization,
    };
    const options = { headers: headers };
    const resp = this.httpClient.delete(url, options);
    return resp;
  }
}
