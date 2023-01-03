import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  navLinks = [
    {
      link: "my-classes",
      label: "My Classes"
    },
    {
      link: "create-assignment",
      label: "Create an Assignment"
    },
    {
      link: "analysis",
      label: "Analysis"
    },
    {
      link: "resource-lib",
      label: "Resource Library"
    }
  ]
}
