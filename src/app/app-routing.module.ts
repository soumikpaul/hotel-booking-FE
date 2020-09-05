import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component'
import { DialogComponent } from './dialog/dialog.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {path: 'list', component: HotelListComponent},
  //{path:'',redirectTo:'/list',pathMatch:'full'},
  {path: 'list/:id',component: DialogComponent},
 // {path: 'booking',component:BookingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HotelListComponent, DialogComponent,BookingComponent];

