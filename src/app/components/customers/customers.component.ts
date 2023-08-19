import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {Customer} from "../../model/customer.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

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
  customerId!: number;
  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    this.searchFormGroup = this.fb.group({
      keyword : this.fb.control("")
    });

    this.handleSearchCustomer();
  }

  handleSearchCustomer() {
    let kw = this.searchFormGroup?.value.keyword;
    this.customers$ = this.customerService.searchCustomers(kw).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  handleDeleteCustomer(customer: Customer) {
    let confirmDelete = confirm("Are you sure to delete this customer?");
    if(!confirmDelete) return;
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

  handleUpdateCustomer(customer: Customer) {
    this.router.navigateByUrl("/auth/update-customer/" + customer.id, {state: customer}).then(r => {

    });
  }

  handleCustomerAccounts(customer: Customer) {
    this.router.navigateByUrl("/auth/customer-accounts/" + customer.id, {state: customer}).then(r => {
    });
  }

  handleAddNewAccount(customer: Customer) {
    this.router.navigateByUrl("/auth/customers/new-account/" + customer.id, {state: customer}).then(r => {
    });
  }
}
