import { BookingRequest } from './../model/BookingRequestModel';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';

const ELEMENT_DATA: BookingRequest[] = [
  {id: '1', acommodationName: 'Vila Idila', numberOfGuests: 5, startDate: '22-05-2005', finishDate: '30-04-2023'},
  {id: '2', acommodationName: 'Vila Varga', numberOfGuests: 4, startDate: '05-05-2005', finishDate: '30-04-2022'},
  {id: '3', acommodationName: 'Novi Sad 2', numberOfGuests: 2, startDate: '01-01-2005', finishDate: '10-07-2002'},
  {id: '4', acommodationName: 'Novi Sad 2', numberOfGuests: 100, startDate: '13-06-2019', finishDate: '01-08-2020'},
  {id: '5', acommodationName: 'BG palata',  numberOfGuests: 25, startDate: '15-05-2022', finishDate: '30-04-2024'},
  {id: '6', acommodationName: 'BG palata', numberOfGuests: 15, startDate: '31-12-2020', finishDate: '01-04-2022'},
  
];

@Component({
  selector: 'app-booking-requests',
  templateUrl: './booking-requests.component.html',
  styleUrls: ['./booking-requests.component.css']
})
export class BookingRequestsComponent implements OnInit{

  displayedColumns: string[] = ['startDate', 'finishDate', 'numberOfGuests', 'approve', 'reject'];
  public dataSource = ELEMENT_DATA;

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {}

  ngOnInit(): void {
    //this.showAllAcommodations();
  }

  @ViewChild(MatSort) sort!: MatSort;

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

  announceSortChange(sortState: Sort) { //za sortiranje
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  
  public approveRequest(): void{

  }

  public rejectRequest(): void{

  }
}
