import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api-service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-prompt-lib',
  templateUrl: './prompt-lib.component.html',
  styleUrls: ['./prompt-lib.component.scss']
})
export class PromptLibComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  
  dataSource: any;
  data: any;
  displayedColumns: string[] = ['category', 'title', 'description'];
  
  constructor(public api: ApiService) {}

  ngOnInit() {
    const url = environment.urls.fetchRecords + "/prompt";
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
