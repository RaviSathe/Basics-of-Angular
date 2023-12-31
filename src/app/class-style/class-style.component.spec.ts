import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStyleComponent } from './class-style.component';

describe('ClassStyleComponent', () => {
  let component: ClassStyleComponent;
  let fixture: ComponentFixture<ClassStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassStyleComponent]
    });
    fixture = TestBed.createComponent(ClassStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
