import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalBodComponent } from './principal-bod.component';

describe('PrincipalBodComponent', () => {
  let component: PrincipalBodComponent;
  let fixture: ComponentFixture<PrincipalBodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalBodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalBodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
