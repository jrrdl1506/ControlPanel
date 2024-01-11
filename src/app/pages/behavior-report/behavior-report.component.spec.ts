import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorReportComponent } from './behavior-report.component';

describe('BehaviorReportComponent', () => {
  let component: BehaviorReportComponent;
  let fixture: ComponentFixture<BehaviorReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviorReportComponent]
    });
    fixture = TestBed.createComponent(BehaviorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
