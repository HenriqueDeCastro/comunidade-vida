import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhoWeAreComponent } from './home-who-we-are.component';

describe('HomeWhoWeAreComponent', () => {
  let component: HomeWhoWeAreComponent;
  let fixture: ComponentFixture<HomeWhoWeAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWhoWeAreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWhoWeAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
