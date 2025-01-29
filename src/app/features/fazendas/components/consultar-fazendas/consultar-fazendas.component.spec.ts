import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFazendasComponent } from './consultar-fazendas.component';

describe('ConsultarFazendasComponent', () => {
  let component: ConsultarFazendasComponent;
  let fixture: ComponentFixture<ConsultarFazendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarFazendasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarFazendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
