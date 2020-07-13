import { Injectable } from '@angular/core';
import { Cases } from './cases';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_BACKEND = 'http://localhost:3000/api';
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getall(): Observable<Cases[]> {
    return this.httpClient.get<Cases[]>(`${this.API_BACKEND}`)
      .pipe(
        tap(cases => console.log('fetched cases')),
        catchError(this.handleError('getCases', []))
      );
  }
  insert(elemento: Cases): Observable<Cases> {
    return this.httpClient.post<Cases>(`${this.API_BACKEND}/`, elemento);
  }
  update(id: string, elemento: Cases) {
    return this.httpClient.put<Cases>(`${this.API_BACKEND}/${id}`, elemento);
  }
  delete(id: number) {
    return this.httpClient.delete<Cases>(`${this.API_BACKEND}/${id}`);
  }
  constructor(private httpClient: HttpClient) { }
}
