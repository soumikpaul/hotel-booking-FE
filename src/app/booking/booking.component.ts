import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {  FormBuilder,  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service'
import { VERSION, MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookRoom: FormGroup;
  ticket:Array<any>;
 constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<BookingComponent>,private bookservice: BookserviceService) { }  
 ngOnInit() {
   this.bookingDetails();
 }  bookingDetails() {
   this.bookRoom = this.formBuilder.group({
     name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
     noOfPerson: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
     startDate: ['', Validators.required],
     endDate: ['', Validators.required],
     contactNo: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
     others: ['']
   });
 }  others = [
   {  name: 'BreakFast' },
   {  name: 'Lunch' },
   {  name: 'Snacks' },
   {  name: 'Dinner' }
 ];
 onCancel() {
  this.dialogRef.close();
}
onBooking()
{
  this.ticket=this.bookRoom.value;

  let hotelId,name,phone,noOfPerson,dateFrom,dateTo;
  const formData={
   "hotelId" : 1,
   "name":this.bookRoom.value.name,
   "phone":this.bookRoom.value.contactNo,
   "noOfPerson":this.bookRoom.value.noOfPerson,
   "dateFrom":this.bookRoom.value.startDate,
   "dateTo":this.bookRoom.value.endDate
  }
  console.log(formData);
  console.log(this.bookRoom.value);
  this.bookservice.save(formData).toPromise();

}


  

}
