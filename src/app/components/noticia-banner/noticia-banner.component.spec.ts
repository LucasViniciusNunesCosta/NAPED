import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaBannerComponent } from './noticia-banner.component';

describe('NoticiaBannerComponent', () => {
  let component: NoticiaBannerComponent;
  let fixture: ComponentFixture<NoticiaBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
