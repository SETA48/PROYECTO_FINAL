import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrucel1Component } from './carrucel1.component';

describe('Carrucel1Component', () => {
  let component: Carrucel1Component;
  let fixture: ComponentFixture<Carrucel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carrucel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrucel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
