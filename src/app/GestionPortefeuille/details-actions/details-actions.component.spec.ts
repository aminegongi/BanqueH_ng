import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsActionsComponent } from './details-actions.component';

describe('DetailsActionsComponent', () => {
  let component: DetailsActionsComponent;
  let fixture: ComponentFixture<DetailsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
