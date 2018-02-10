import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPropListComponent } from './dashboard-prop-list.component';

describe('DashboardPropListComponent', () => {
  let component: DashboardPropListComponent;
  let fixture: ComponentFixture<DashboardPropListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPropListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
