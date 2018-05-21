import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemTypesComponent } from './problem-types.component';

describe('ProblemTypesComponent', () => {
  let component: ProblemTypesComponent;
  let fixture: ComponentFixture<ProblemTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
