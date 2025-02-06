import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDistrubuicaoPlanosAnualmenteComponent } from './grafico-distrubuicao-planos-anualmente.component';

describe('GraficoDistrubuicaoPlanosAnualmenteComponent', () => {
  let component: GraficoDistrubuicaoPlanosAnualmenteComponent;
  let fixture: ComponentFixture<GraficoDistrubuicaoPlanosAnualmenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoDistrubuicaoPlanosAnualmenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDistrubuicaoPlanosAnualmenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
