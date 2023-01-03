import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorTextsComponent } from './mentor-texts/mentor-texts.component';
import { MetricLibComponent } from './metric-lib/metric-lib.component';
import { PromptLibComponent } from './prompt-lib/prompt-lib.component';
import { ResourceLibComponent } from './resource-lib.component';
import { RubricsComponent } from './rubrics/rubrics.component';

const routes: Routes = [
  {
    path: '',
    component: MetricLibComponent
  },
  {
    path: 'metric-lib',
    component: MetricLibComponent
  },
  {
    path: 'prompt-lib',
    component: PromptLibComponent
  },
  {
    path: 'mentor-texts',
    component: MentorTextsComponent
  },
  {
    path: 'rubrics',
    component: RubricsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceLibRouting { 
  
}
