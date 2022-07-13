import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllshowsComponent } from './allshows.component';

describe('AllshowsComponent', () => {
  let component: AllshowsComponent;
  let fixture: ComponentFixture<AllshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllshowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});