import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionInitiationComponent } from './home-section-initiation.component';

describe('HomeSectionInitiationComponent', () => {
  let component: HomeSectionInitiationComponent;
  let fixture: ComponentFixture<HomeSectionInitiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSectionInitiationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSectionInitiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
