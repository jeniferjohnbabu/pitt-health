import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCellRendererComponent } from './insurance-cell-renderer.component';

describe('InsuranceCellRendererComponent', () => {
  let component: InsuranceCellRendererComponent;
  let fixture: ComponentFixture<InsuranceCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
