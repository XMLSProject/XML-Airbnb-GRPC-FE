import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Acommodation } from '../model/Acommodation';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AcommodationService } from '../../admin/service/acommodation.service';


@Component({
  selector: 'app-search-acommodations',
  templateUrl: './search-acommodations.component.html',
  styleUrls: ['./search-acommodations.component.css']
})
export class SearchAcommodationsComponent implements AfterViewInit , OnInit {
  
  displayedColumns: string[] = ['name', 'location', 'minGuests', 'maxGuests']; 


  dataSource = new MatTableDataSource<Acommodation>();
  acommodations: Acommodation[] = [];

  constructor(private _liveAnnouncer: LiveAnnouncer, private acommodationService: AcommodationService) {}

  ngOnInit(): void {
    this.showAllAcommodations();
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) { //za sortiranje
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  public searchAcommodations(): void{

  }

  public showAllAcommodations(): void {
    this.acommodationService.getAllAcommodations().subscribe(res => {
      //this.acommodations = res;
      this.dataSource.data = this.acommodations;
      console.log(this.acommodations);
      
    })
  }
  
}
