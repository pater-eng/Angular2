import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrzeugKindComponent } from './fahrzeug-kind.component';

describe('FahrzeugKindComponent', () => {
  let component: FahrzeugKindComponent;
  let fixture: ComponentFixture<FahrzeugKindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahrzeugKindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahrzeugKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
