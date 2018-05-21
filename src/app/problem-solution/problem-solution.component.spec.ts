import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolutionComponent } from './problem-solution.component';

describe('ProblemSolutionComponent', () => {
  let component: ProblemSolutionComponent;
  let fixture: ComponentFixture<ProblemSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
