import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAboutComponent } from './p-about.component';

describe('PAboutComponent', () => {
  let component: PAboutComponent;
  let fixture: ComponentFixture<PAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PAboutComponent]
    });
    fixture = TestBed.createComponent(PAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
