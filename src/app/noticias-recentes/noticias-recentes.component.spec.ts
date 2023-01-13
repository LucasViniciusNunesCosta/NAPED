import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasRecentesComponent } from './noticias-recentes.component';

describe('NoticiasRecentesComponent', () => {
  let component: NoticiasRecentesComponent;
  let fixture: ComponentFixture<NoticiasRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasRecentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
