import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGalleryComponent } from './p-gallery.component';

describe('PGalleryComponent', () => {
  let component: PGalleryComponent;
  let fixture: ComponentFixture<PGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PGalleryComponent]
    });
    fixture = TestBed.createComponent(PGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
