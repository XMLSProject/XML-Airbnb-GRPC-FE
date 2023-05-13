import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcommodationListComponent } from './acommodation-list.component';

describe('AcommodationListComponent', () => {
  let component: AcommodationListComponent;
  let fixture: ComponentFixture<AcommodationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcommodationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcommodationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
