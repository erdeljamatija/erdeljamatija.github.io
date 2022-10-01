import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SwUpdate } from '@angular/service-worker';
import { TableDataSource, TableItem } from './table-datasource';
import { SupabaseService } from "./../supabase.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource: TableDataSource;
  data: any[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'is_it', 'created_at'];

  constructor(private supabase: SupabaseService, private swUpdate: SwUpdate) {
    this.dataSource = new TableDataSource();
  }

  ngOnInit(): void {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if(confirm("You're using an old version of the table. Want to update?")) {
          window.location.reload();
        }
      });
    }

    this.supabase.getTests().then(data => {
      this.data = data.data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.data;//this.dataSource;

      console.log(this.data);
    });
  }
}
