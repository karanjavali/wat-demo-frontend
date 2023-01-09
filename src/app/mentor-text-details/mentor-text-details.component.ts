import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, Inject, OnInit} from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api-service/api.service';

@Component({
  selector: 'app-mentor-text-details',
  templateUrl: './mentor-text-details.component.html',
  styleUrls: ['./mentor-text-details.component.scss']
})
export class MentorTextDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, public matDialogRef: MatDialogRef<MentorTextDetailsComponent>, public api: ApiService) {}

  checkedPersuasive = true;
  ngOnInit() {

    this.mentorText.setValue({
      skill: {title: '', description: ''},
      // {title:this.data.rowData.skill.title, desciption: this.data.rowData.skill.description}, 
      category:this.data.rowData.category, 
      title:this.data.rowData.title, 
      description:this.data.rowData.description, 
      created_on:this.data.rowData.created_on
    })

    if(this.data.rowData.category == "Persuasive") {
      this.mentorText.patchValue({category: "Persuasive"});
      this.checkedPersuasive = true;
    }

    else {
      this.checkedPersuasive = false;
      this.mentorText.patchValue({category: "Summary"});
    }

    if(this.data.type == "Edit") {
      const url = environment.urls.fetchSingleRecord+'/skill/'+this.data.rowData.skill;
      this.api.get(url).subscribe((res:any) => {
        console.log(this.data); 
        this.mentorText.patchValue({skill: {title: res.title, description: res.description}})
        
      })
    }
    
    
  }
  // ['skill', 'category', 'title', 'description', 'created_on'];
  mentorText = new FormGroup({
    // skill: new FormControl('', [Validators.required]),
    skill: new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    }, [Validators.required]),
    category: new FormControl('Persuasive'),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    created_on: new FormControl('', [Validators.required])
  })

  onSubmit(): void {
    console.log(this.mentorText.value)
    this.matDialogRef.close(this.mentorText.value);
  }
}
