import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityModalComponent } from './university-modal.component';

describe('UniversityModalComponent', () => {
  let component: UniversityModalComponent;
  let fixture: ComponentFixture<UniversityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
