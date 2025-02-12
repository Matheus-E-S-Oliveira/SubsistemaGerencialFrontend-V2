import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencasTabManagerComponent } from './licencas-tab-manager.component';

describe('LicencasTabManagerComponent', () => {
  let component: LicencasTabManagerComponent;
  let fixture: ComponentFixture<LicencasTabManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LicencasTabManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicencasTabManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
