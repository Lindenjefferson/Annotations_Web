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

  public postNota(nota : Nota): Observable<Nota> {
    return this.httpClient.post<Nota>(this.apiUrl, nota)
  }

  public putNota(nota: Nota, id : String): Observable<Nota> {
    return this.httpClient.put<Nota>(this.apiUrl + '/' + id, nota)
  }

  public deleteNota(id : String) {
    return this.httpClient.delete(this.apiUrl + '/' + id)
  }

}