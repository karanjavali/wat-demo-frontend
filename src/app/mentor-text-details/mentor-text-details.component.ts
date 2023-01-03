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

  checked = true;
  ngOnInit() {
    console.log(this.data);
  }
  // ['skill', 'category', 'title', 'description', 'created_on'];
  mentorText = new FormGroup({
    skill: new FormControl('', [Validators.required]),
    category: new FormControl('Persuasive', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    created_on: new FormControl('', [Validators.required])
  })

  onSubmit(): void {
    console.log(this.mentorText);
    this.matDialogRef.close(this.mentorText.value);
  }
}
