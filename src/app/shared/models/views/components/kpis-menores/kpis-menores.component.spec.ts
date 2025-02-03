import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpisMenoresComponent } from './kpis-menores.component';

describe('KpisMenoresComponent', () => {
  let component: KpisMenoresComponent;
  let fixture: ComponentFixture<KpisMenoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KpisMenoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpisMenoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
