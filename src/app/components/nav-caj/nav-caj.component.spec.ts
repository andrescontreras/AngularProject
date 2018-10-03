import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCajComponent } from './nav-caj.component';

describe('NavCajComponent', () => {
  let component: NavCajComponent;
  let fixture: ComponentFixture<NavCajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
