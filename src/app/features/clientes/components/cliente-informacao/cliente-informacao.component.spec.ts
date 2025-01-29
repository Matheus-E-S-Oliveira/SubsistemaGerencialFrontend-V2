import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInformacaoComponent } from './cliente-informacao.component';

describe('ClienteInformacaoComponent', () => {
  let component: ClienteInformacaoComponent;
  let fixture: ComponentFixture<ClienteInformacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteInformacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
