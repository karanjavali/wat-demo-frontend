import { Component, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MentorTextDetailsComponent } from 'src/app/mentor-text-details/mentor-text-details.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}





@Component({
  selector: 'app-mentor-texts',
  templateUrl: './mentor-texts.component.html',
  styleUrls: ['./mentor-texts.component.scss']
})



export class MentorTextsComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  dataSource: any;
  
  dummyData = [
    {skill:"Augmentation", category:"News", title:"Mari Speaks", description:"abcde", created_on:"10/11/12"},
    {skill:"Persuasion", category:"News", title:"The Lowdown", description:"abcde", created_on:"10/11/12"},
  ]
  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.dummyData);
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.columnsToDisplay);
  }

  displayedColumns: string[] = ['skill', 'category', 'title', 'description', 'created_on'];

  columnsToDisplay: string[] = this.displayedColumns;

  openAddForm() {
    console.log("button clicked!");
    const dialogRef = this.dialog.open(MentorTextDetailsComponent, {
      data: {
        dummy:"data"
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res!="") {
        this.dummyData.push(res);
        this.dataSource = new MatTableDataSource(this.dummyData);
      }
    })
  }
}
