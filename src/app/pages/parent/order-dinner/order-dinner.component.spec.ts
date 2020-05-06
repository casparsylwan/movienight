import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDinnerComponent } from './order-dinner.component';

describe('OrderDinnerComponent', () => {
  let component: OrderDinnerComponent;
  let fixture: ComponentFixture<OrderDinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
