import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeguardingComponent } from './safeguarding.component';

describe('SafeguardingComponent', () => {
  let component: SafeguardingComponent;
  let fixture: ComponentFixture<SafeguardingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafeguardingComponent]
    });
    fixture = TestBed.createComponent(SafeguardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
