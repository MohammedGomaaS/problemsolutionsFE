import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionRepliesComponent } from './solution-replies.component';

describe('SolutionRepliesComponent', () => {
  let component: SolutionRepliesComponent;
  let fixture: ComponentFixture<SolutionRepliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionRepliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
