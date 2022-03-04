import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  logar(login: Login): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(login)

    return this.httpClient.post(this.url + "login", body, { 'headers': headers })

  }
}
