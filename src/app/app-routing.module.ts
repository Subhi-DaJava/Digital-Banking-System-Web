import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";
import {CustomerAccountsComponent} from "./customer-accounts/customer-accounts.component";
import {CustomerComponent} from "./customer/customer.component";

const routes: Routes = [
  { path: "customers", component: CustomersComponent },
  { path: "accounts", component: AccountsComponent },
  { path: "new-customer", component: NewCustomerComponent },
  { path: "update-customer/:id", component: UpdateCustomerComponent },
  { path: "customer-accounts/:id", component: CustomerAccountsComponent },
  { path: "customers/:id", component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
