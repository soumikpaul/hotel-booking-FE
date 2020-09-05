import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }
  save(ticket: any): Observable<any> {
    // let result: Observable<Object>;
    // if (car['href']) {
    //   result = this.http.put(car.href, car);
    // } else {
      return this.http.post('http://localhost:8080/tickets', ticket);
    //
  }

  // remove(href: string) {
  //   return this.http.delete(href);
  // }
}
