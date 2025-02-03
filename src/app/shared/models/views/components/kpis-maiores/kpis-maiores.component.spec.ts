import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpisMaioresComponent } from './kpis-maiores.component';

describe('KpisMaioresComponent', () => {
  let component: KpisMaioresComponent;
  let fixture: ComponentFixture<KpisMaioresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KpisMaioresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpisMaioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
