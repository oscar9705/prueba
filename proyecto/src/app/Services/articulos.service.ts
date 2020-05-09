import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

//import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

 
  url='http://localhost:80/angularphp/';
  constructor(private http: HttpClient){}
  
  recuperarTodos(): Observable<Articulo[]>{
    return this.http.get<Articulo[]>(`${this.url}recuperartodos.php`);
                       
                        
                
  }
  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
  alta(articulo){
    return this.http.post(`${this.url}alta.php`,JSON.stringify(articulo));
  }
  baja(codigo:number){
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  }
  seleccionar(codigo:number){
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }
  modificacion(articulo){
    return this.http.post(`${this.url}modificacion.php`,JSON.stringify(articulo));
  }
}