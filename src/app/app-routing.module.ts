import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {QuizQuestionComponent} from "./components/quiz-question/quiz-question.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {RegisterComponent} from "./components/register/register.component";
import {ResultsComponent} from "./components/results/results.component";


const routes: Routes = [
  { path: "question", component: QuizQuestionComponent },
  { path: "results", component: ResultsComponent },
  { path: "login", component: LogInComponent },
  { path: "register", component: RegisterComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}