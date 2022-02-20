import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObligationComponent } from './add-obligation.component';

describe('AddObligationComponent', () => {
  let component: AddObligationComponent;
  let fixture: ComponentFixture<AddObligationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddObligationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObligationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
