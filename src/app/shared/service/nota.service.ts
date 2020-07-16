import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from '../model/nota.model'

@Injectable({
  providedIn: 'root'
})

export class NotaService {
  apiUrl = 'https://annotations-api.herokuapp.com/notas';
  constructor(private httpClient: HttpClient) { }
  public getNotas(): Observable<Nota[]> {
    return this.httpClient.get<Nota[]>(this.apiUrl)
  }
}