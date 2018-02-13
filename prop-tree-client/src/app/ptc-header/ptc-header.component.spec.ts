import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtcHeaderComponent } from './ptc-header.component';

describe('PtcHeaderComponent', () => {
  let component: PtcHeaderComponent;
  let fixture: ComponentFixture<PtcHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtcHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
