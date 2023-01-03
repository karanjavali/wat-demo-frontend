import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceLibComponent } from './resource-lib.component';
import { MaterialModule } from '../material/material';
import { MentorTextsComponent } from './mentor-texts/mentor-texts.component';
import { RubricsComponent } from './rubrics/rubrics.component';
import { PromptLibComponent } from './prompt-lib/prompt-lib.component';
import { MetricLibComponent } from './metric-lib/metric-lib.component';
import { ResourceLibRouting } from './resource-lib-routing';

@NgModule({
  declarations: [
    ResourceLibComponent,
    MentorTextsComponent,
    RubricsComponent,
    PromptLibComponent,
    MetricLibComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ResourceLibRouting
  ],
  // exports : [
  //   ResourceLibComponent
  // ]
})

export class ResourceLibModule { }
