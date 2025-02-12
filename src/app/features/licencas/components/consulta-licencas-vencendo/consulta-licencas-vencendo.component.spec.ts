import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLicencasVencendoComponent } from './consulta-licencas-vencendo.component';

describe('ConsultaLicencasVencendoComponent', () => {
  let component: ConsultaLicencasVencendoComponent;
  let fixture: ComponentFixture<ConsultaLicencasVencendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaLicencasVencendoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaLicencasVencendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
