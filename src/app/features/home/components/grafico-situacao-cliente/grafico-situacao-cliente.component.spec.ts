import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoSituacaoClienteComponent } from './grafico-situacao-cliente.component';

describe('GraficoSituacaoClienteComponent', () => {
  let component: GraficoSituacaoClienteComponent;
  let fixture: ComponentFixture<GraficoSituacaoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoSituacaoClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoSituacaoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
