import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  // userMessage: string = '';
  // messages: Array<{ from: string, text: string }> = [];

  messages: { role: string, content: string }[] = [{ role: 'assistant', content: 'How can I help you?' }];
  prompt: string = '';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.loadChatHistory();
  }
  // sendMessage() {
  //   if (this.userMessage.trim()) {
  //     this.messages.push({ from: 'user', text: this.userMessage });
  //     this.chatService.sendMessage(this.userMessage).subscribe(response => {
  //       const botMessage = response.choices[0].message.content;
  //       this.messages.push({ from: 'bot', text: botMessage });
  //       this.userMessage = '';
  //     });
  //   }
  // }
  loadChatHistory(): void {
    const savedMessages = localStorage.getItem('messages');
    if (savedMessages) {
      this.messages = JSON.parse(savedMessages);
    }
  }

  saveChatHistory(): void {
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }

  clearChatHistory(): void {
    this.messages = [{ role: 'assistant', content: 'How can I help you?' }];
    this.saveChatHistory();
  }

  sendMessage(): void {
    if (this.prompt.trim()) {
      const userMessage = { role: 'user', content: this.prompt.trim() };
      this.messages.push(userMessage);
      this.saveChatHistory();

      this.chatService.getResponse(this.prompt).subscribe(response => {
        const assistantMessage = { role: 'assistant', content: response };
        this.messages.push(assistantMessage);
        this.saveChatHistory();
      });

      this.prompt = '';
    }
  }


}
