import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolutionsComponent } from './problem-solutions.component';

describe('ProblemSolutionsComponent', () => {
  let component: ProblemSolutionsComponent;
  let fixture: ComponentFixture<ProblemSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
