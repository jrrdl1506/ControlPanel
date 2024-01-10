import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinReportComponent } from './bulletin-report.component';

describe('BulletinReportComponent', () => {
  let component: BulletinReportComponent;
  let fixture: ComponentFixture<BulletinReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulletinReportComponent]
    });
    fixture = TestBed.createComponent(BulletinReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
