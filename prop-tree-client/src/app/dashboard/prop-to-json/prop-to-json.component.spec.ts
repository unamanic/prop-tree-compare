import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropToJsonComponent } from './prop-to-json.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {MaterialImportsModule} from "../../material-imports/material-imports.module";
import {FlexLayoutModule} from "@angular/flex-layout";

describe('PropToJsonComponent', () => {
  let component: PropToJsonComponent;
  let fixture: ComponentFixture<PropToJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropToJsonComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterTestingModule,
        MaterialImportsModule,
        FlexLayoutModule,
        ]
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
