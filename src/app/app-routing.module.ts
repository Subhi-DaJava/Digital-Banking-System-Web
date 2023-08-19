import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from "./components/customers/customers.component";
import {AccountsComponent} from "./components/accounts/accounts.component";
import {NewCustomerComponent} from "./components/new-customer/new-customer.component";
import {UpdateCustomerComponent} from "./components/update-customer/update-customer.component";
import {CustomerAccountsComponent} from "./components/customer-accounts/customer-accounts.component";
import {CustomerComponent} from "./components/customer/customer.component";
import {BankAccountsComponent} from "./components/bank-accounts/bank-accounts.component";
import {NewAccountComponent} from "./components/new-account/new-account.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthenticateTemplateComponent} from "./components/authenticate-template/authenticate-template.component";

const routes: Routes = [

  {path: "login", component: LoginComponent},
  {path: "", redirectTo: '/login', pathMatch: 'full'},

  {
    path: "auth", component: AuthenticateTemplateComponent, children: [
      {path: "customers", component: CustomersComponent},
      {path: "accounts", component: AccountsComponent},
      {path: "new-customer", component: NewCustomerComponent},
      {path: "update-customer/:id", component: UpdateCustomerComponent},
      {path: "customer-accounts/:id", component: CustomerAccountsComponent},
      {path: "customers/:id", component: CustomerComponent},
      {path: "bank-accounts", component: BankAccountsComponent},
      {path: "customers/new-account/:id", component: NewAccountComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
