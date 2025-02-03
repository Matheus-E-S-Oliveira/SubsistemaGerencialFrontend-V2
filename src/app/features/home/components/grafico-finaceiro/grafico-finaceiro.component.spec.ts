import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoFinaceiroComponent } from './grafico-finaceiro.component';

describe('GraficoFinaceiroComponent', () => {
  let component: GraficoFinaceiroComponent;
  let fixture: ComponentFixture<GraficoFinaceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoFinaceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoFinaceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
