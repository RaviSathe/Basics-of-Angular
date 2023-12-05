import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHomeComponent } from './p-home.component';

describe('PHomeComponent', () => {
  let component: PHomeComponent;
  let fixture: ComponentFixture<PHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PHomeComponent]
    });
    fixture = TestBed.createComponent(PHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
