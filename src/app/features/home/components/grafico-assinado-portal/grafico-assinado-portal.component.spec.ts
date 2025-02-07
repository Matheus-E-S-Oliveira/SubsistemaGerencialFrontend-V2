import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoAssinadoPortalComponent } from './grafico-assinado-portal.component';

describe('GraficoAssinadoPortalComponent', () => {
  let component: GraficoAssinadoPortalComponent;
  let fixture: ComponentFixture<GraficoAssinadoPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoAssinadoPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoAssinadoPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
