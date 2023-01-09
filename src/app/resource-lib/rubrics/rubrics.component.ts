import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api-service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rubrics',
  templateUrl: './rubrics.component.html',
  styleUrls: ['./rubrics.component.scss']
})

export class RubricsComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  dataSource: any;
  data: any;
  columnHeaders: any;
  constructor(public api: ApiService) { 
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

  displayedColumns: string[] = ['category', 'title', 'description'];
  
  ngOnInit() {
    const url = environment.urls.fetchRecords + "/rubric";
    this.api.get(url).subscribe((res:any) => {
      console.log(res);
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  
  columnsToDisplay: string[] = this.displayedColumns;

}
