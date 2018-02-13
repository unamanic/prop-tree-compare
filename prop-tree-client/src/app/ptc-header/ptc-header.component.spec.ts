import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtcHeaderComponent } from './ptc-header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {MaterialImportsModule} from "../material-imports/material-imports.module";
import {FlexLayoutModule} from "@angular/flex-layout";

describe('PtcHeaderComponent', () => {
  let component: PtcHeaderComponent;
  let fixture: ComponentFixture<PtcHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtcHeaderComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterTestingModule,
        MaterialImportsModule,
        FlexLayoutModule,
      ],
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
