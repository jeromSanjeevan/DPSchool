import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTeacherWelcomeComponent } from './head-teacher-welcome.component';

describe('HeadTeacherWelcomeComponent', () => {
  let component: HeadTeacherWelcomeComponent;
  let fixture: ComponentFixture<HeadTeacherWelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadTeacherWelcomeComponent]
    });
    fixture = TestBed.createComponent(HeadTeacherWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
