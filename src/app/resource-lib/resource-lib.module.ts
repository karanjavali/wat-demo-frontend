import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceLibComponent } from './resource-lib.component';
import { MaterialModule } from '../material/material';
import { MentorTextsComponent } from './mentor-texts/mentor-texts.component';
import { RubricsComponent } from './rubrics/rubrics.component';
import { PromptLibraryComponent } from './prompt-lib/prompt-lib.component';
import { MetricLibComponent } from './metric-lib/metric-lib.component';

@NgModule({
  declarations: [
    ResourceLibComponent,
    MentorTextsComponent,
    RubricsComponent,
    PromptLibraryComponent,
    MetricLibComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [
    ResourceLibComponent
  ]
})

export class ResourceLibModule { }
