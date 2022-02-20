import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesActionsComponent } from './mes-actions.component';

describe('MesActionsComponent', () => {
  let component: MesActionsComponent;
  let fixture: ComponentFixture<MesActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
