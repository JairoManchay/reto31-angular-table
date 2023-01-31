import { Component, ViewChild } from '@angular/core';
import { AllUserService } from '../../services/all-user.service';
import { Userts } from '../../models/userts';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {
  displayedColumns: string[] = ['Id', 'Title', 'State','Url', 'Created', 'Update', 'Options'];
  dataSource: any;

  // Pagination
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private http: AllUserService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.getVista().subscribe({
      next:(user: Userts[])=>{

        // guardando en el dataSource mi respuesta
        this.dataSource = new MatTableDataSource<Userts>(user)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
      }
    })
  }

  Filterchange(event: Event){
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter= filvalue;
  }

  getrow(row:any){
    console.log(row)
  }
  FunctionEdit(id: any){
    console.log(id)
  }
}
