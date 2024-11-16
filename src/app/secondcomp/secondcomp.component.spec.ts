import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SECONDCOMPComponent } from './secondcomp.component';

describe('SECONDCOMPComponent', () => {
  let component: SECONDCOMPComponent;
  let fixture: ComponentFixture<SECONDCOMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SECONDCOMPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SECONDCOMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
