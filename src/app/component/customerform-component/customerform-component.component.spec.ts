import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerformComponentComponent } from './customerform-component.component';

describe('CustomerformComponentComponent', () => {
  let component: CustomerformComponentComponent;
  let fixture: ComponentFixture<CustomerformComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerformComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerformComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
