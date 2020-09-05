import { Component, OnInit,ViewChild } from '@angular/core';
import { HotelServiceService } from '../hotel-service.service';
import { MatPaginator, MatDialog } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule, MatDialogRef } from '@angular/material';
import { BookingComponent } from '../booking/booking.component';
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotel:Array<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private hotelservice: HotelServiceService, private dialog:MatDialog) { }

  ngOnInit() {
    this.hotelservice.getAll().subscribe(data => {
      this.hotel = data;
      console.log(this.hotel);

    });
    // console.log(this.hotel);

  }

  openBooking(){
    const dialogRef = this.dialog.open(BookingComponent,{
      width:'500px',
      height:'500px',

    })
  }

}
