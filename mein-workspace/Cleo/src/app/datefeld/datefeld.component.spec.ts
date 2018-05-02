import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatefeldComponent } from './datefeld.component';

describe('DatefeldComponent', () => {
  let component: DatefeldComponent;
  let fixture: ComponentFixture<DatefeldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatefeldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatefeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
