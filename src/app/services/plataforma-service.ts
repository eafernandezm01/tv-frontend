import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContenido } from '../model/IContenido';

@Injectable({
  providedIn: 'root',
})
export class PlataformaService {
  constructor(private http:HttpClient){}


  getListadoContenido (): Observable<any>{
    return this.http.get ('http://localhost:3000/api/content/');
  }
}
