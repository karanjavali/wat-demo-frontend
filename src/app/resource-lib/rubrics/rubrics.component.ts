import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
const dummyData = [
  {category:"News", title:"Mari Speaks", description:"abcde"},
  {category:"News", title:"The Lowdown", description:"abcde"}
]
@Component({
  selector: 'app-rubrics',
  templateUrl: './rubrics.component.html',
  styleUrls: ['./rubrics.component.scss']
})
export class RubricsComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  dataSource: any;

  constructor() {
    this.dataSource = new MatTableDataSource(dummyData);
  }
  displayedColumns: string[] = ['category', 'title', 'description'];
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.columnsToDisplay);
  }

  columnsToDisplay: string[] = this.displayedColumns;

}
