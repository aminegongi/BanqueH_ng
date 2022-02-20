import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObligationComponent } from './list-obligation.component';

describe('ListObligationComponent', () => {
  let component: ListObligationComponent;
  let fixture: ComponentFixture<ListObligationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListObligationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListObligationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
