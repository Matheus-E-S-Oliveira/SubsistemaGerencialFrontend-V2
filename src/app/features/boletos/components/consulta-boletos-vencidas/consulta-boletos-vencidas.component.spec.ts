import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaBoletosVencidasComponent } from './consulta-boletos-vencidas.component';

describe('ConsultaBoletosVencidasComponent', () => {
  let component: ConsultaBoletosVencidasComponent;
  let fixture: ComponentFixture<ConsultaBoletosVencidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaBoletosVencidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaBoletosVencidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
