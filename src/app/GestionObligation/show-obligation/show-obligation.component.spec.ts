import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowObligationComponent } from './show-obligation.component';

describe('ShowObligationComponent', () => {
  let component: ShowObligationComponent;
  let fixture: ComponentFixture<ShowObligationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowObligationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowObligationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
