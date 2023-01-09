import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ResourceLibModule } from './resource-lib/resource-lib.module';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MentorTextDetailsComponent } from './mentor-text-details/mentor-text-details.component';
import { ReactiveFormsModule   } from '@angular/forms';
import { ApiService } from './services/api-service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewSkillsComponent } from './view-skills/view-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MyClassesComponent,
    CreateAssignmentComponent,
    AnalysisComponent,
    ConfirmationDialogComponent,
    MentorTextDetailsComponent,
    ViewSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ResourceLibModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
