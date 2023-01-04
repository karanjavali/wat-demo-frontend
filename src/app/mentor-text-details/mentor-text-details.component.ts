import { Component, Inject, OnInit} from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mentor-text-details',
  templateUrl: './mentor-text-details.component.html',
  styleUrls: ['./mentor-text-details.component.scss']
})
export class MentorTextDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, public matDialogRef: MatDialogRef<MentorTextDetailsComponent>
  ) {}

  checkedPersuasive = true;
  ngOnInit() {
    this.mentorText.setValue({skill:this.data.rowData.skill, category:this.data.rowData.category, title:this.data.rowData.title, description:this.data.rowData.description, created_on:this.data.rowData.created_on})
    if(this.data.rowData.category == "Persuasive") {
      this.checkedPersuasive = true;
    }
    else {
      this.checkedPersuasive = false;
    }
  }
  // ['skill', 'category', 'title', 'description', 'created_on'];
  mentorText = new FormGroup({
    skill: new FormControl('', [Validators.required]),
    category: new FormControl('Persuasive'),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    created_on: new FormControl('', [Validators.required])
  })

  onSubmit(): void {
    this.matDialogRef.close(this.mentorText.value);
  }
}
