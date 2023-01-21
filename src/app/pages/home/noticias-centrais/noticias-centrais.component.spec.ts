import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasCentraisComponent } from './noticias-centrais.component';

describe('NoticiasCentraisComponent', () => {
  let component: NoticiasCentraisComponent;
  let fixture: ComponentFixture<NoticiasCentraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasCentraisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasCentraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
