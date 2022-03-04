import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Novidades } from '../models/novidades';



@Injectable({
  providedIn: 'root'
})
export class NovidadesService {

// Varialvel criada para armazenar o endereço da API

  url = " http://localhost:3000/novidades";

// Insere a dependencia HttpClient
  constructor(private httpClient: HttpClient) { }

  // Variavel que armazena as configuraçõe dos Headers da requisição
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  // Método GET, que vai trazer os usuarios da API
  getNovidades(): Observable<Novidades[]> {
    return this.httpClient.get<Novidades[]>(this.url)
  }

}
