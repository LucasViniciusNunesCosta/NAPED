import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeBannerComponent } from './anime-banner.component';

describe('AnimeBannerComponent', () => {
  let component: AnimeBannerComponent;
  let fixture: ComponentFixture<AnimeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
