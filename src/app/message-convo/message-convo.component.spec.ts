import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageConvoComponent } from './message-convo.component';

describe('MessageConvoComponent', () => {
  let component: MessageConvoComponent;
  let fixture: ComponentFixture<MessageConvoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageConvoComponent]
    });
    fixture = TestBed.createComponent(MessageConvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
