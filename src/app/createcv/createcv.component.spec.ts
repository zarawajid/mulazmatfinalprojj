import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecvComponent } from './createcv.component';

describe('CreatecvComponent', () => {
  let component: CreatecvComponent;
  let fixture: ComponentFixture<CreatecvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
