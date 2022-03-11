import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenBtnJossComponent } from './green-btn-joss.component';

describe('GreenBtnJossComponent', () => {
  let component: GreenBtnJossComponent;
  let fixture: ComponentFixture<GreenBtnJossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenBtnJossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenBtnJossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
