import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavRoutesDesktopComponent } from './sidenav-routes-desktop.component';

describe('SidenavRoutesDesktopComponent', () => {
  let component: SidenavRoutesDesktopComponent;
  let fixture: ComponentFixture<SidenavRoutesDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavRoutesDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavRoutesDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
