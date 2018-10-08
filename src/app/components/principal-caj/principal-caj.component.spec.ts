import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalCajComponent } from './principal-caj.component';

describe('PrincipalCajComponent', () => {
  let component: PrincipalCajComponent;
  let fixture: ComponentFixture<PrincipalCajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalCajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalCajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
