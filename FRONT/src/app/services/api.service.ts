import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private REST_API_SERVER = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { }
  
  private authorization!: string;

  public getAuthorizationToken() {
    const url = this.REST_API_SERVER + '/login/';
    const msgBody = { login: 'letscode', senha: 'lets@123' };
    const headers = { 'Content-Type': 'application/json' };
    const options = { headers: headers };
    const resp = this.httpClient.post(url, msgBody, options);
    return resp;
  }

  public setAuthorizationToken(token: string) {
    this.authorization = 'Bearer ' + token;
    console.log(this.authorization);
  }

  public createNewCard(card: string) {
    const url = this.REST_API_SERVER + '/card/';
    const headers = { 'Content-Type': 'application/json', Authorization: this.authorization };
    const options = { headers: headers };
    const resp = this.httpClient.post(url, card, options);
    return resp;
  }

}

