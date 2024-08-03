import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechConverterComponent } from './speech-converter.component';

describe('SpeechConverterComponent', () => {
  let component: SpeechConverterComponent;
  let fixture: ComponentFixture<SpeechConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechConverterComponent]
    });
    fixture = TestBed.createComponent(SpeechConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
