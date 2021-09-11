import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeaderPopupComponent } from './table-header-popup.component';

describe('TableHeaderPopupComponent', () => {
  let component: TableHeaderPopupComponent;
  let fixture: ComponentFixture<TableHeaderPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHeaderPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHeaderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
