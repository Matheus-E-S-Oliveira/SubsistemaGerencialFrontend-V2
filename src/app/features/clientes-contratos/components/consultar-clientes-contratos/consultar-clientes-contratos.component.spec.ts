import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarClientesContratosComponent } from './consultar-clientes-contratos.component';

describe('ConsultarClientesContratosComponent', () => {
  let component: ConsultarClientesContratosComponent;
  let fixture: ComponentFixture<ConsultarClientesContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarClientesContratosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarClientesContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
