import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDistrubuicaoPlanosMensalmenteComponent } from './grafico-distrubuicao-planos-mensalmente.component';

describe('GraficoDistrubuicaoPlanosMensalmenteComponent', () => {
  let component: GraficoDistrubuicaoPlanosMensalmenteComponent;
  let fixture: ComponentFixture<GraficoDistrubuicaoPlanosMensalmenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoDistrubuicaoPlanosMensalmenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDistrubuicaoPlanosMensalmenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
