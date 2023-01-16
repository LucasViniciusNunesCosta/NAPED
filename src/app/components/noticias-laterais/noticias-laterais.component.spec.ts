import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasLateraisComponent } from './noticias-laterais.component';

describe('NoticiasLateraisComponent', () => {
  let component: NoticiasLateraisComponent;
  let fixture: ComponentFixture<NoticiasLateraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasLateraisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasLateraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
