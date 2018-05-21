import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProblemComponent } from './problem/problem.component';
import { ProblemsComponent } from './problems/problems.component';
import { ProblemSolutionsComponent } from './problem-solutions/problem-solutions.component';
import { ProblemSolutionComponent } from './problem-solution/problem-solution.component';
import { ProblemTypeComponent } from './problem-type/problem-type.component';
import { ProblemTypesComponent } from './problem-types/problem-types.component';
import { SolutionReplieComponent } from './solution-replie/solution-replie.component';
import { SolutionRepliesComponent } from './solution-replies/solution-replies.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { UserTypesComponent } from './user-types/user-types.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemComponent,
    ProblemsComponent,
    ProblemSolutionsComponent,
    ProblemSolutionComponent,
    ProblemTypeComponent,
    ProblemTypesComponent,
    SolutionReplieComponent,
    SolutionRepliesComponent,
    UserTypeComponent,
    UserTypesComponent,
    UserProfileComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
