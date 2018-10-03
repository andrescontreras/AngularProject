import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProdComponent } from './consultar-prod.component';

describe('ConsultarProdComponent', () => {
  let component: ConsultarProdComponent;
  let fixture: ComponentFixture<ConsultarProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
