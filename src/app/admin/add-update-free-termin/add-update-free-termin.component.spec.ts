import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateFreeTerminComponent } from './add-update-free-termin.component';

describe('AddUpdateFreeTerminComponent', () => {
  let component: AddUpdateFreeTerminComponent;
  let fixture: ComponentFixture<AddUpdateFreeTerminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateFreeTerminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateFreeTerminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
