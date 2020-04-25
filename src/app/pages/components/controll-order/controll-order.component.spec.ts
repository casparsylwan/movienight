import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllOrderComponent } from './controll-order.component';

describe('ControllOrderComponent', () => {
  let component: ControllOrderComponent;
  let fixture: ComponentFixture<ControllOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
