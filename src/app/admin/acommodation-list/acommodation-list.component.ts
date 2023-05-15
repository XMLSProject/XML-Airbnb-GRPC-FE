
import { BookingRequestsComponent } from './../booking-requests/booking-requests.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateFreeTerminComponent } from '../add-update-free-termin/add-update-free-termin.component';
import { AddUpdatePriceComponent } from '../add-update-price/add-update-price.component';
import { AcommodationService } from '../service/acommodation.service';
import { Acommodation } from '../model/AcommodationModel';



@Component({
  selector: 'app-acommodation-list',
  templateUrl: './acommodation-list.component.html',
  styleUrls: ['./acommodation-list.component.css']
})

export class AcommodationListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'location', 'minGuests', 'maxGuests'];


  public dataSource = new MatTableDataSource<Acommodation>();
  public acommodation: Acommodation = new Acommodation; 
  public acommodations: Acommodation[] = [];

  constructor(private _liveAnnouncer: LiveAnnouncer, private acommodationService: AcommodationService, public dialog: MatDialog) {}

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


  public showAllAcommodations(): void{
    this.acommodationService.getAllAcommodations().subscribe(res => {
      this.acommodations = res;
      this.dataSource.data = this.acommodations;
      console.log(res);

    })
  }

  public addUpdateTermin(selectedAcommodation: Acommodation): void {
    this.dialog.open(AddUpdateFreeTerminComponent, {
      width: '50%',
      data: selectedAcommodation
    });
  }

  public addUpdatePrice(selectedAcommodation: Acommodation): void {
    this.dialog.open(AddUpdatePriceComponent, {
      width: '50%',
      data: selectedAcommodation
    });
  }

  public bookingRequests(selectedAcommodation: Acommodation): void {
    this.dialog.open(BookingRequestsComponent, {
      width: '70%',
      data: selectedAcommodation
    });
  }

}
