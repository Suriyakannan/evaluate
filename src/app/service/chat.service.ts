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
  // private apiUrl = 'https://api.openai.com/v1/chat/completions';
  // private apiKey = 'sk-8VuFylLJVwYalBC52WNIPTsbPFMDH4Slclu7wjdmtNT3BlbkFJPRwigSjEfvrWCTxfiHYtNJeEE9YqhnnyaLsWkVc1UA';

  private apiUrl = 'http://172.16.16.144:11434'; // Update this to your Olama endpoint
  // private apiKey = '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'; 

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
