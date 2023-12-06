import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionWhoWeAreComponent } from './home-section-who-we-are.component';

describe('HomeSectionWhoWeAreComponent', () => {
  let component: HomeSectionWhoWeAreComponent;
  let fixture: ComponentFixture<HomeSectionWhoWeAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSectionWhoWeAreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSectionWhoWeAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
