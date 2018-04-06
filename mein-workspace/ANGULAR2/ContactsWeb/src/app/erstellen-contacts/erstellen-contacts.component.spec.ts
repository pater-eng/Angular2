import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErstellenContactsComponent } from './erstellen-contacts.component';

describe('ErstellenContactsComponent', () => {
  let component: ErstellenContactsComponent;
  let fixture: ComponentFixture<ErstellenContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErstellenContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErstellenContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
