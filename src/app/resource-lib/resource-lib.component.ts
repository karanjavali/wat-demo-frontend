import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-lib',
  templateUrl: './resource-lib.component.html',
  styleUrls: ['./resource-lib.component.scss']
})
export class ResourceLibComponent {
  navLinks = [
    {
      link: "metric-lib",
      label: "Metric Library"
    },
    {
      link: "prompt-lib",
      label: "Prompt Library"
    },
    {
      link: "rubrics",
      label: "Rubrics"
    },
    {
      link: "mentor-texts",
      label: "Mentor Texts"
    }
  ]
}
