import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';
  private apiKey = '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'; // Add your OpenAI API key here

  constructor(private http: HttpClient) { }

  generateResponse(userMessage: string): Observable<any> {
    console.log(userMessage,'userMessage');
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });
  
    const body = {
      inputs: userMessage
    };
  
    console.log('Request Body:', body); // Log the request body to ensure it's correct
  
    return this.http.post<any>(this.apiUrl, body, { headers })
     
  }
}
