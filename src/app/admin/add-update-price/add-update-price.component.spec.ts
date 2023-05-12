import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdatePriceComponent } from './add-update-price.component';

describe('AddUpdatePriceComponent', () => {
  let component: AddUpdatePriceComponent;
  let fixture: ComponentFixture<AddUpdatePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdatePriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdatePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
