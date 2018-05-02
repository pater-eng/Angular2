import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestehenderVertragComponent } from './bestehender-vertrag.component';

describe('BestehenderVertragComponent', () => {
  let component: BestehenderVertragComponent;
  let fixture: ComponentFixture<BestehenderVertragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestehenderVertragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestehenderVertragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
