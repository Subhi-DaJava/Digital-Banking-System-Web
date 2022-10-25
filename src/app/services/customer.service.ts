import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  //backendHost: string = "http://localhost:8086";
  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Customer[]> {

   return  this.http.get<Customer[]>(environment.backendHost + "/customers");
   //return  this.http.get<Customer[]>("http://localhost:8086/customer"); //pour les gestions des erreurs, endpoint n'existe pas.
  }

  public searchCustomers(keyword: string): Observable<Customer[]> {

    return  this.http.get<Customer[]>(environment.backendHost + "/customers/search?keyword=" + keyword);
  }

  public saveNewCustomer(customer: Customer) {

    return  this.http.post<Customer>(environment.backendHost + "/customer", customer);
  }
}
