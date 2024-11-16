import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIRSTCOMPComponent } from './firstcomp.component';

describe('FIRSTCOMPComponent', () => {
  let component: FIRSTCOMPComponent;
  let fixture: ComponentFixture<FIRSTCOMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FIRSTCOMPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FIRSTCOMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
