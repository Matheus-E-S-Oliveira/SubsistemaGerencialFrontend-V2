import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLicencasVencidasComponent } from './consulta-licencas-vencidas.component';

describe('ConsultaLicencasVencidasComponent', () => {
  let component: ConsultaLicencasVencidasComponent;
  let fixture: ComponentFixture<ConsultaLicencasVencidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaLicencasVencidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaLicencasVencidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
