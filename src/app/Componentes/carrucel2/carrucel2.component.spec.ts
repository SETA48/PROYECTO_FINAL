import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrucel2Component } from './carrucel2.component';

describe('Carrucel2Component', () => {
  let component: Carrucel2Component;
  let fixture: ComponentFixture<Carrucel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carrucel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrucel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
