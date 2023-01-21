import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewComponent } from './card-base.component';

describe('CardNewComponent', () => {
  let component: CardNewComponent;
  let fixture: ComponentFixture<CardNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
