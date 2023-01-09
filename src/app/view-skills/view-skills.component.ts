import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api-service/api.service';

@Component({
  selector: 'app-view-skills',
  templateUrl: './view-skills.component.html',
  styleUrls: ['./view-skills.component.scss']
})
export class ViewSkillsComponent {

  title = '';
  description = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public matDialogRef: MatDialogRef<ViewSkillsComponent>, public api: ApiService) {}

  ngOnInit() {
    console.log("data - "+this.data.skill);
    const url = environment.urls.fetchSingleRecord + "/skill/" + this.data.skill;
    console.log(url);
    this.api.get(url).subscribe((res:any) => {
      this.title = res.title;
      this.description = res.description;
    })
  }
}
