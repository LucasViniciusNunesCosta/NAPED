import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasPrincipaisComponent } from './noticias-principais.component';

describe('NoticiasPrincipaisComponent', () => {
  let component: NoticiasPrincipaisComponent;
  let fixture: ComponentFixture<NoticiasPrincipaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasPrincipaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasPrincipaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
