import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {catchError, Observable, throwError} from "rxjs";
import {Customer} from "../model/customer.model";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers$!: Observable<Customer[]>;
  errorMessage!: Object;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    /*
    this.http.get("http://localhost:8086/customers").subscribe(data => {
    this.customers = data;
    }, error => {
      console.log(error);
    });*/

    this.customers$ = this.customerService.getCustomers().pipe (
      catchError(err => {
        this.errorMessage = err.message;

        return throwError(err);
      })
    );
  }
}
