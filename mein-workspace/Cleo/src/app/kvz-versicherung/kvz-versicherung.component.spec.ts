import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvzVersicherungComponent } from './kvz-versicherung.component';

describe('KvzVersicherungComponent', () => {
  let component: KvzVersicherungComponent;
  let fixture: ComponentFixture<KvzVersicherungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvzVersicherungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvzVersicherungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
