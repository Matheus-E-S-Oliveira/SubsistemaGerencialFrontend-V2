import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaBoletosVencendoComponent } from './consulta-boletos-vencendo.component';

describe('ConsultaBoletosVencendoComponent', () => {
  let component: ConsultaBoletosVencendoComponent;
  let fixture: ComponentFixture<ConsultaBoletosVencendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaBoletosVencendoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaBoletosVencendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
