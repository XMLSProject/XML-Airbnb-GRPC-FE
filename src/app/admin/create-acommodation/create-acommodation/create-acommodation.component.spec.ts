import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcommodationComponent } from './create-acommodation.component';

describe('CreateAcommodationComponent', () => {
  let component: CreateAcommodationComponent;
  let fixture: ComponentFixture<CreateAcommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAcommodationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAcommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
