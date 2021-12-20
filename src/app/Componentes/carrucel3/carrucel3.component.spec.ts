import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrucel3Component } from './carrucel3.component';

describe('Carrucel3Component', () => {
  let component: Carrucel3Component;
  let fixture: ComponentFixture<Carrucel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carrucel3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrucel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
