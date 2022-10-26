import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer.model";
import {map, Observable} from "rxjs";
import {CustomerService} from "../services/customer.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  errorUpdateMessage!: string;
  updateFormGroup: FormGroup | undefined;

  constructor(private customerService: CustomerService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {

    this.updateFormGroup = this.fb.group({
      id : this.fb.control(null, [Validators.required, Validators.minLength(1)]),
      name : this.fb.control(null, [Validators.required, Validators.minLength(5)]),
      email : this.fb.control(null, [Validators.required, Validators.email])
    });
  }

  handleUpdateCustomer() {
   let customer: Customer = this.updateFormGroup?.value;

    let confirmUpdate = confirm("Are you sure to update this customer?");
    if(!confirmUpdate)
      return;

    this.customerService.updateCustomer(customer).subscribe({
      next: (res) => {
        alert('Customer has been successfully updated!');
        this.router.navigateByUrl("/customers");
      },
      error: err => {
        this.errorUpdateMessage = err.message;
      }
    });
  }
}
