import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {Customer} from "../model/customer.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers$!: Observable<Customer[]>;
  errorMessage!: Object;
  errorDeleteMessage!: Object;
  searchFormGroup: FormGroup | undefined;

  constructor(private customerService: CustomerService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.searchFormGroup = this.fb.group({
      keyword : this.fb.control("")
    });

   /* this.customers$ = this.customerService.getCustomers().pipe (
      catchError(err => {
        this.errorMessage = err.message;

        return throwError(err);
      })
    );*/
    this.handleSearchCustomer();
  }

  handleSearchCustomer() {
    let kw = this.searchFormGroup?.value.keyword;
    this.customers$ = this.customerService.searchCustomers(kw).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    )
  }

  handleDeleteCustomer(customer: Customer) {
    let conf = confirm("Are you sure to delete this customer?");
    if(!conf) return;
    this.customerService.deleteCustomer(customer.id).subscribe({
      /*  next : (res) => {
          this.handleSearchCustomer();
        },*/
      next: (res) => {
        this.customers$ = this.customers$.pipe(
          map(data => {
            let index = data.indexOf(customer);
            data.slice(index, 1);
            return data;
          }));
      },
      error: err => {
        this.errorDeleteMessage = err.message;
      }
    });
  }
}
