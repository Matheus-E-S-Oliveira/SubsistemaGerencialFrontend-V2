import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoSituacaolicencaComponent } from './grafico-situacao-licenca.component';

describe('GraficoSituacaolicencaComponent', () => {
  let component: GraficoSituacaolicencaComponent;
  let fixture: ComponentFixture<GraficoSituacaolicencaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoSituacaolicencaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoSituacaolicencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
