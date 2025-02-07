import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoSituacaoContratoComponent } from './grafico-situacao-contrato.component';

describe('GraficoSituacaoContratoComponent', () => {
  let component: GraficoSituacaoContratoComponent;
  let fixture: ComponentFixture<GraficoSituacaoContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoSituacaoContratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoSituacaoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
