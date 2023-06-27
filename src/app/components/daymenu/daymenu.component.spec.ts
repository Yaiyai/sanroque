import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaymenuComponent } from './daymenu.component';

describe('DaymenuComponent', () => {
  let component: DaymenuComponent;
  let fixture: ComponentFixture<DaymenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaymenuComponent]
    });
    fixture = TestBed.createComponent(DaymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
