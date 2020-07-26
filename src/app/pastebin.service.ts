/*pastebin.service.ts */
import { Injectable } from '@angular/core';
import { Pastebin } from './pastebin';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PastebinService {
  // The project uses InMemoryWebApi to handle the Server API.
  // Here "api/pastebin" simulates a Server API url
  private pastebinUrl = 'api/pastebin';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  public getPastebin(): Observable<Pastebin[]> {
    return this.http
      .get<Pastebin[]>(this.pastebinUrl)
      .pipe(catchError(this.handleError));
  }

  public addPaste(pastebin: Pastebin): Observable<Pastebin> {
    return this.http
      .post<Pastebin>(this.pastebinUrl, pastebin, {
        headers: this.headers,
      })
      .pipe(catchError(this.handleError));
  }

  public updatePaste(paste: Pastebin) {
    const url = `${this.pastebinUrl}/${paste.id}`;
    return this.http
      .put(url, paste, { headers: this.headers })
      .pipe(
        map(() => paste),
        catchError(this.handleError)
      );
  }

  public deletePaste(pastebin: Pastebin): Observable<void | Object> {
    console.log(pastebin.id);
    const url = `${this.pastebinUrl}/${pastebin.id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage = error.message || error;
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
