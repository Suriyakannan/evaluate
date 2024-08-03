import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvoComponent } from './convo.component';

describe('ConvoComponent', () => {
  let component: ConvoComponent;
  let fixture: ComponentFixture<ConvoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvoComponent]
    });
    fixture = TestBed.createComponent(ConvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
