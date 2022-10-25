import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any;
  errorMessage!: Object;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    /*
    this.http.get("http://localhost:8086/customers").subscribe(data => {
    this.customers = data;
    }, error => {
      console.log(error);
    });*/

    this.customerService.getCustomers().subscribe({
      next : (data) => {
        this.customers = data;
      },
      error: (err) => {
      /*  console.log(err);*/
        this.errorMessage = err; // .message;
    }
    });
  }

}
