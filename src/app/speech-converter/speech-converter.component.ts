import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-speech-converter',
  templateUrl: './speech-converter.component.html',
  styleUrls: ['./speech-converter.component.scss']
})
export class SpeechConverterComponent implements OnInit{
  speech: SpeechSynthesisUtterance = new SpeechSynthesisUtterance();
  voices: SpeechSynthesisVoice[] = [];
  items: MenuItem[]=[];
  ngOnInit() {

  //   this.items = [
  //     {
  //         label: 'pi-play-circle',
  //         icon: PrimeIcons.PAUSE,
  //     }
  // ];

    // Fetch and populate the voices when they are available
    window.speechSynthesis.onvoiceschanged = () => {
      this.voices = window.speechSynthesis.getVoices();
      this.speech.voice = this.voices[0];
    };
  }

  convertTextToSpeech() {
    const text = (document.querySelector('textarea') as HTMLTextAreaElement).value;
    this.speech.text = text;
    window.speechSynthesis.speak(this.speech);
  }

  updateVoice(event: Event) {
    const selectedIndex = (event.target as HTMLSelectElement).selectedIndex;
    this.speech.voice = this.voices[selectedIndex];
  }

}
