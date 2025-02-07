import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoSitucaoClientesComponent } from './grafico-situcao-clientes.component';

describe('GraficoSitucaoClientesComponent', () => {
  let component: GraficoSitucaoClientesComponent;
  let fixture: ComponentFixture<GraficoSitucaoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoSitucaoClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoSitucaoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
