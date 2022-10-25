import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Customer[]> {

   return  this.http.get<Customer[]>("http://localhost:8086/customers");
   //return  this.http.get<Customer[]>("http://localhost:8086/customer"); //pour les gestions des erreurs, endpoint n'existe pas.
  }
}
