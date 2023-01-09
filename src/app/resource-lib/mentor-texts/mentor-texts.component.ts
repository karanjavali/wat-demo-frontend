import { Component, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MentorTextDetailsComponent } from 'src/app/mentor-text-details/mentor-text-details.component';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/services/api-service/api.service';
import { ViewSkillsComponent } from 'src/app/view-skills/view-skills.component';

@Component({
  selector: 'app-mentor-texts',
  templateUrl: './mentor-texts.component.html',
  styleUrls: ['./mentor-texts.component.scss']
})

export class MentorTextsComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  
  dataSource: any;
  data:any

  columnHeaders:any;
  
  constructor(public dialog: MatDialog, public api: ApiService) {
    this.columnHeaders = {
      'skill': 'Skill',
      'description': 'Description',
      'edit': 'Edit Column',
      'delete': 'Delete Column',
      'title': 'Title',
      'category': 'Category',
      'created_on': 'Created On'
    }
  }

  ngOnInit() {
    const url = environment.urls.fetchRecords + "/mentor_text";
    this.api.get(url).subscribe((res:any) => {
      console.log(res);
      // console.log(res[0].id);
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  displayedColumns: string[] = ['category', 'title', 'description', 'created_on', 'skill', 'edit', 'delete'];

  columnsToDisplay: string[] = this.displayedColumns;

  deleteRow(row:number) {
    const url = environment.urls.deleteRecord;
    const data = {
      classType: "mentor_text",
      id: this.data[row].id
    }

    this.api.post(url,data).subscribe((res:any) => {
      console.log(res);
      this.data.splice(row,1);
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }
  
  editRow(row:number) {
    const dialogRef = this.dialog.open(MentorTextDetailsComponent, {
      data: {
        type:"Edit",
        rowData:this.data[row]
      },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res!="") {
        const url = environment.urls.updateRecord;
        const data = {classType:'mentor_text', id: this.data[row].id, newRecord: res}
        this.api.post(url,data).subscribe((apiRes:any) => {
          this.data[row] = res;
          this.dataSource = new MatTableDataSource(this.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
      }
    })
  }

  openAddForm() {
    const dialogRef = this.dialog.open(MentorTextDetailsComponent, {
      data: {
        type:"Add",
        rowData:{skill:"", category:"", title:"", description:"", created_on:""}
      },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res!="") {
        
        const body = {
          newRecord: res,
          classType: "mentor_text"
        }
        const url = environment.urls.addRecord;
        this.api.post(url,body).subscribe((apiRes:any) => {
          this.data.push(res);
          this.dataSource = new MatTableDataSource(this.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
      }
    })
  }

  viewSkill(row:number) {
    this.dialog.open(ViewSkillsComponent, {data: {skill: this.data[row].skill}, disableClose:true});
  }
}
