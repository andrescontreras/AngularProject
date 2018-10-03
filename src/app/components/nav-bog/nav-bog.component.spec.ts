import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBogComponent } from './nav-bog.component';

describe('NavBogComponent', () => {
  let component: NavBogComponent;
  let fixture: ComponentFixture<NavBogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
