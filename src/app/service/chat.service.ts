import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = environment.whisperApiUrl;

  constructor(private http: HttpClient) { }

  getTextReply(message: string): Observable<string> {
    const payload = { message: message };
    return this.http.post<{ reply: string }>(this.apiUrl, payload).pipe(
      map(response => response.reply)
    );
  }
}
