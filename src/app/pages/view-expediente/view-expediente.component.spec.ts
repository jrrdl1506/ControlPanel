import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpedienteComponent } from './view-expediente.component';

describe('ViewExpedienteComponent', () => {
  let component: ViewExpedienteComponent;
  let fixture: ComponentFixture<ViewExpedienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewExpedienteComponent]
    });
    fixture = TestBed.createComponent(ViewExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
