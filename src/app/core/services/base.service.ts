import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


export class BaseService<T> {

  // API path
  base_path = 'http://localhost:3000';

  constructor(public http: HttpClient, path: string) {
    this.base_path += path;
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // Create a new item
  createItem(item): Observable<T> {
    return this.http
      .post<T>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get single data by ID
  getItem(id): Observable<T> {
    return this.http
      .get<T>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get data
  getList(params?: Object): Observable<T[]> {
    return this.http
      .get<T[]>(this.base_path, {
        params: this.createParams(params)
      })
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Update item by id
  updateItem(id, item): Observable<T> {
    return this.http
      .put<T>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<T>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Create query params helper function
  createParams(params: any): HttpParams {
    const paramsClone = Object.assign({}, params);

    const paramsObject: {
      [param: string]: string | ReadonlyArray<string>;
    } = {};

    if(paramsClone !== undefined && paramsClone !== null) {
      Object.keys(paramsClone).map((key: string) => {
        if(paramsClone[key] !== null && paramsClone[key] !== undefined && paramsClone[key] !== '') {
          paramsObject[key] = String(paramsClone[key]);
        }
      });
    }

    return new HttpParams({
      fromObject: paramsObject
    });
  }
}
