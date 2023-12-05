import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PContactComponent } from './p-contact.component';

describe('PContactComponent', () => {
  let component: PContactComponent;
  let fixture: ComponentFixture<PContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PContactComponent]
    });
    fixture = TestBed.createComponent(PContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
