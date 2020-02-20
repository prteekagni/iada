import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcontestComponent } from './editcontest.component';

describe('EditcontestComponent', () => {
  let component: EditcontestComponent;
  let fixture: ComponentFixture<EditcontestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcontestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
