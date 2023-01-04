import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { ResourceLibComponent } from './resource-lib/resource-lib.component';
import { ResourceLibModule } from './resource-lib/resource-lib.module';

const routes: Routes = [
  {
    path: 'analysis',
    component: AnalysisComponent
  },
  {
    path: 'create-assignment',
    component: CreateAssignmentComponent
  },
  {
    path: 'my-classes',
    component: MyClassesComponent
  },
  {
    path: 'resource-lib',
    component: ResourceLibComponent,
    loadChildren: () => ResourceLibModule
  },
  {
    path: '**',
    redirectTo: '/my-classes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
