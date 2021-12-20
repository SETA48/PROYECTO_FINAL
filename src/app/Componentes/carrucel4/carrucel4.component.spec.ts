import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrucel4Component } from './carrucel4.component';

describe('Carrucel4Component', () => {
  let component: Carrucel4Component;
  let fixture: ComponentFixture<Carrucel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carrucel4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrucel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
