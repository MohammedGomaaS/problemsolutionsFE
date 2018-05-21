import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionReplieComponent } from './solution-replie.component';

describe('SolutionReplieComponent', () => {
  let component: SolutionReplieComponent;
  let fixture: ComponentFixture<SolutionReplieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionReplieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionReplieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
