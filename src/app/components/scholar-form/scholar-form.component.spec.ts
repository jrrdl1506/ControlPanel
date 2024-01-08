import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarFormComponent } from './scholar-form.component';

describe('ScholarFormComponent', () => {
  let component: ScholarFormComponent;
  let fixture: ComponentFixture<ScholarFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScholarFormComponent]
    });
    fixture = TestBed.createComponent(ScholarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
