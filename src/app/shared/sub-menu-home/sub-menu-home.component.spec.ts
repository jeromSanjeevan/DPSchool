import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuHomeComponent } from './sub-menu-home.component';

describe('SubMenuHomeComponent', () => {
  let component: SubMenuHomeComponent;
  let fixture: ComponentFixture<SubMenuHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubMenuHomeComponent]
    });
    fixture = TestBed.createComponent(SubMenuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
