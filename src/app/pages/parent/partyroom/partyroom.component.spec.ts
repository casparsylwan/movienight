import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyroomComponent } from './partyroom.component';

describe('PartyroomComponent', () => {
  let component: PartyroomComponent;
  let fixture: ComponentFixture<PartyroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
