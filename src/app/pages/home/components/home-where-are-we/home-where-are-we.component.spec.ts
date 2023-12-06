import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhereAreWeComponent } from './home-where-are-we.component';

describe('HomeWhereAreWeComponent', () => {
  let component: HomeWhereAreWeComponent;
  let fixture: ComponentFixture<HomeWhereAreWeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWhereAreWeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeWhereAreWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
