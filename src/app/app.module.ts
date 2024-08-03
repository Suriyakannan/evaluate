import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechConverterComponent } from './speech-converter/speech-converter.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { ChatModule } from './chat/chat.module';
import { ConvoComponent } from './convo/convo.component';
import { MessageConvoComponent } from './message-convo/message-convo.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechConverterComponent,
    ChatComponent,
    MessageComponent,
    ConvoComponent,
    MessageConvoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChatModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
