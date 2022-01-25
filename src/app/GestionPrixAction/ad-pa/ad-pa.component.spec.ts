import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPaComponent } from './ad-pa.component';

describe('AdPaComponent', () => {
  let component: AdPaComponent;
  let fixture: ComponentFixture<AdPaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
