import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDistrubuicaoClientePlanosComponent } from './grafico-distrubuicao-cliente-planos.component';

describe('GraficoDistrubuicaoClientePlanosComponent', () => {
  let component: GraficoDistrubuicaoClientePlanosComponent;
  let fixture: ComponentFixture<GraficoDistrubuicaoClientePlanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoDistrubuicaoClientePlanosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDistrubuicaoClientePlanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
