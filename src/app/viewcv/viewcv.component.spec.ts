import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcvComponent } from './viewcv.component';

describe('ViewcvComponent', () => {
  let component: ViewcvComponent;
  let fixture: ComponentFixture<ViewcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
