import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMenuLateralComponent } from './layout-menu-lateral.component';

describe('LayoutMenuLateralComponent', () => {
  let component: LayoutMenuLateralComponent;
  let fixture: ComponentFixture<LayoutMenuLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutMenuLateralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutMenuLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
