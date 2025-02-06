import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDistrubuicaoClientesFormaPagamentoComponent } from './grafico-distrubuicao-clientes-forma-pagamento.component';

describe('GraficoDistrubuicaoClientesFormaPagamentoComponent', () => {
  let component: GraficoDistrubuicaoClientesFormaPagamentoComponent;
  let fixture: ComponentFixture<GraficoDistrubuicaoClientesFormaPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoDistrubuicaoClientesFormaPagamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDistrubuicaoClientesFormaPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
