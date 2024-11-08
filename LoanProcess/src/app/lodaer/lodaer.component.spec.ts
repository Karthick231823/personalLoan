import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodaerComponent } from './lodaer.component';

describe('LodaerComponent', () => {
  let component: LodaerComponent;
  let fixture: ComponentFixture<LodaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodaerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
