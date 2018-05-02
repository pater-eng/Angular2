import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutzerprofilComponent } from './nutzerprofil.component';

describe('NutzerprofilComponent', () => {
  let component: NutzerprofilComponent;
  let fixture: ComponentFixture<NutzerprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutzerprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutzerprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
