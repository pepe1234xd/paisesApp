import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl:string="https://restcountries.com/v3.1";

  constructor(private http:HttpClient) {}

  buscarPais(query:string):Observable<Country[]>{

    // const httpParams = new HttpParams().set('fields','name.capital,ccs2')

    const url = `${this.apiUrl}/name/${query}`;

    return this.http.get<Country[]>(url);
    // pipe(
    //   catchError(err=> of([]))
    // );
    //estudiar rxjs
  }

  buscarCapital(query:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${query}`;

    return this.http.get<Country[]>(url);
  }

 getPaisPorCodigo(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarPorRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url);
  }
}
