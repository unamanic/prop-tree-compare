import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFileListComponent } from './dashboard-file-list.component';

describe('DashboardFileListComponent', () => {
  let component: DashboardFileListComponent;
  let fixture: ComponentFixture<DashboardFileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
