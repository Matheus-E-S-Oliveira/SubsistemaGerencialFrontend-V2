import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendaInformacaoComponent } from './fazenda-informacao.component';

describe('FazendaInformacaoComponent', () => {
  let component: FazendaInformacaoComponent;
  let fixture: ComponentFixture<FazendaInformacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FazendaInformacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FazendaInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
