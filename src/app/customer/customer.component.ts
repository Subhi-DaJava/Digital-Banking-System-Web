import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerId!: string;
  customer!: Customer;
  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService) {
    this.customer = this.router.getCurrentNavigation()?.extras.state as Customer;
  }
  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
  }

}
