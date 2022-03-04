import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcgamesComponent } from './pcgames.component';

describe('PcgamesComponent', () => {
  let component: PcgamesComponent;
  let fixture: ComponentFixture<PcgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
