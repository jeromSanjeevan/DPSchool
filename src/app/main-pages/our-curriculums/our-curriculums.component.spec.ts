import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCurriculumsComponent } from './our-curriculums.component';

describe('OurCurriculumsComponent', () => {
  let component: OurCurriculumsComponent;
  let fixture: ComponentFixture<OurCurriculumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurCurriculumsComponent]
    });
    fixture = TestBed.createComponent(OurCurriculumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
