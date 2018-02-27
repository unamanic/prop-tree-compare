import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropToJsonComponent } from './prop-to-json.component';

describe('PropToJsonComponent', () => {
  let component: PropToJsonComponent;
  let fixture: ComponentFixture<PropToJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropToJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
