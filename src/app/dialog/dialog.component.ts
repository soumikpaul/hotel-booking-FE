import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { HotelServiceService} from '../hotel-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  hotel:Array<any>;
  sub: Subscription;
  constructor(private route: ActivatedRoute,
    private router: Router,
     public hotelservice: HotelServiceService,private dialog:MatDialog) {}

   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    const id = params['id'];
    if (id) {
      this.hotelservice.getById(id).subscribe((hotel: any) => {
        if (hotel) {
          this.hotel = hotel;
          console.log(hotel);
        } else {
          console.log(`Hotel with id '${id}' not found, returning to list`);
          //this.gotoList();
        }
      });
    }
  });
  
  }
  gotoList() {
    this.router.navigate(['/hotel-list']);
  }
  openBooking(){
    const dialogRef = this.dialog.open(BookingComponent,{
      width:'500px',
      height:'500px',

    })
  }
}

