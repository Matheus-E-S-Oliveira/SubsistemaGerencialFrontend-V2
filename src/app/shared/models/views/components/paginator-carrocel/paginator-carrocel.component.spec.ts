import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorCarrocelComponent } from './paginator-carrocel.component';

describe('PaginatorCarrocelComponent', () => {
  let component: PaginatorCarrocelComponent;
  let fixture: ComponentFixture<PaginatorCarrocelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatorCarrocelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorCarrocelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
