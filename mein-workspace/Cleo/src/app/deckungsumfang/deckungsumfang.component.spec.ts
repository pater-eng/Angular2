import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckungsumfangComponent } from './deckungsumfang.component';

describe('DeckungsumfangComponent', () => {
  let component: DeckungsumfangComponent;
  let fixture: ComponentFixture<DeckungsumfangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckungsumfangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckungsumfangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
