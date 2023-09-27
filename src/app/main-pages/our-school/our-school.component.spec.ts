import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSchoolComponent } from './our-school.component';

describe('OurSchoolComponent', () => {
  let component: OurSchoolComponent;
  let fixture: ComponentFixture<OurSchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurSchoolComponent]
    });
    fixture = TestBed.createComponent(OurSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
