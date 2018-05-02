import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrzeugangabenComponent } from './fahrzeugangaben.component';

describe('FahrzeugangabenComponent', () => {
  let component: FahrzeugangabenComponent;
  let fixture: ComponentFixture<FahrzeugangabenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahrzeugangabenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahrzeugangabenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
