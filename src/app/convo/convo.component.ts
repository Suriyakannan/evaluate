import { Component } from '@angular/core';
import { ChatbotService } from './convo.service';

@Component({
  selector: 'app-convo',
  templateUrl: './convo.component.html',
  styleUrls: ['./convo.component.scss']
})
export class ConvoComponent {
  showChatbot = false;
  userMessage = '';
  chats: { message: string, type: string }[] = [];

  constructor(private chatbotService: ChatbotService) { }

  toggleChatbot() {
    this.showChatbot = !this.showChatbot;
  }

  createChatLi(message: string, className: string) {
    return { message, type: className };
  }

  generateResponse(incomingChatLi: { message: string, type: string }) {
    console.log(this.userMessage,'userMessage');
    
    this.chatbotService.generateResponse(this.userMessage).subscribe(
      data => {
        incomingChatLi.message = data.response || 'No response received';
      },
      error => {
        incomingChatLi.message = 'Oops! Something went wrong. Please try again';
      }
    );
  }

  handleChat() {
    if (!this.userMessage.trim()) return;
    this.chats.push(this.createChatLi(this.userMessage, 'outgoing'));
    this.userMessage = '';

    setTimeout(() => {
      const incomingChatLi = this.createChatLi('Thinking...', 'incoming');
      this.chats.push(incomingChatLi);
      this.generateResponse(incomingChatLi);
    }, 600);
  }
}
