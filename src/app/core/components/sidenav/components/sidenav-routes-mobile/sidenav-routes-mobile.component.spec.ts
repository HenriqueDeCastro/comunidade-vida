import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavRoutesMobileComponent } from './sidenav-routes-mobile.component';

describe('SidenavRoutesMobileComponent', () => {
  let component: SidenavRoutesMobileComponent;
  let fixture: ComponentFixture<SidenavRoutesMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavRoutesMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavRoutesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
