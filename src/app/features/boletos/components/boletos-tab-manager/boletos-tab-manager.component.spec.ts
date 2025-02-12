import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletosTabManagerComponent } from './boletos-tab-manager.component';

describe('BoletosTabManagerComponent', () => {
  let component: BoletosTabManagerComponent;
  let fixture: ComponentFixture<BoletosTabManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoletosTabManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletosTabManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
