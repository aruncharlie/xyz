import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorregisterComponent } from './tutorregister.component';

describe('TutorregisterComponent', () => {
  let component: TutorregisterComponent;
  let fixture: ComponentFixture<TutorregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
