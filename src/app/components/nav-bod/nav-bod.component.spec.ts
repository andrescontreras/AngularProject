import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBodComponent } from './nav-bod.component';

describe('NavBodComponent', () => {
  let component: NavBodComponent;
  let fixture: ComponentFixture<NavBodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
