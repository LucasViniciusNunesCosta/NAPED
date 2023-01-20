import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCatalogoComponent } from './anime-catalogo.component';

describe('AnimeCatalogoComponent', () => {
  let component: AnimeCatalogoComponent;
  let fixture: ComponentFixture<AnimeCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeCatalogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
