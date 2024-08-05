import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, retryWhen, switchMap } from 'rxjs/operators';
// import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // private apiUrl = environment.whisperApiUrl;

  // constructor(private http: HttpClient) { }

  // getTextReply(message: string): Observable<string> {
  //   const payload = { message: message };
  //   return this.http.post<{ reply: string }>(this.apiUrl, payload).pipe(
  //     map(response => response.reply)
  //   );
  // // }
  // private apiUrl = '';
  // private apiKey = '';

  private apiUrl = ''; // Update this to your Olama endpoint
  // private apiKey = ''; 

  constructor(private http: HttpClient) { }

  // sendMessage(message: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${this.apiKey}`,
  //     'Content-Type': 'application/json'
  //   });

  //   const body = {
  //     model: 'gpt-3.5-turbo',
  //     messages: [{ role: 'user', content: message }]
  //   };

  //   return this.http.post(this.apiUrl, body, { headers }).pipe(
  //     retryWhen(errors => errors.pipe(
  //       switchMap((error: any) => {
  //         if (error.status === 429) {
  //           console.log('Rate limit exceeded, retrying in 1 minute...');
  //           return timer(60000); // retry after 1 minute
  //         }
  //         return throwError(error);
  //       })
  //     )),
  //     catchError(error => {
  //       console.error('Error occurred:', error);
  //       return throwError(error);
  //     })
  //   );
  // }

  getResponse(prompt: string): Observable<string> {
    return this.http.post<string>(this.apiUrl, { prompt });
  }
}
