import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UsecaseCount,UsecaseCountList } from '../../pages/landing-page/landing-page-class';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
//import { of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn: 'root'})
export class LandingService {

  constructor(private http: HttpClient) { }
  getentitylist(): Observable<UsecaseCountList> {
    console.log();
    return this.http.get<UsecaseCountList>(environment.baseaddress + "entity/entitylist ", httpOptions).pipe(
      catchError(this.handleError<any>('Use Case Count'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
