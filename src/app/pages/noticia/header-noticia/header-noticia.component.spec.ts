import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNoticiaComponent } from './header-noticia.component';

describe('HeaderNoticiaComponent', () => {
  let component: HeaderNoticiaComponent;
  let fixture: ComponentFixture<HeaderNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
