import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { ResultsComponent } from './results/results.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatListModule} from "@angular/material/list";
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";
import {NavbarComponent} from "./navbar/navbar.component";
import { UserListComponent } from './user-list/user-list.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        QuizQuestionComponent,
        ResultsComponent,
        LogInComponent,
        RegisterComponent,
        AdminHomeComponent,
        UserListComponent,
        NavbarComponent,
        CreateQuizComponent
    ],
  imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        AppRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatProgressBarModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
