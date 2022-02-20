import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObligationComponent } from './edit-obligation.component';

describe('EditObligationComponent', () => {
  let component: EditObligationComponent;
  let fixture: ComponentFixture<EditObligationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditObligationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditObligationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
