import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { CustomerAccountsComponent } from './components/customer-accounts/customer-accounts.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BankAccountsComponent } from './components/bank-accounts/bank-accounts.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticateTemplateComponent } from './components/authenticate-template/authenticate-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersComponent,
    AccountsComponent,
    NewCustomerComponent,
    UpdateCustomerComponent,
    CustomerAccountsComponent,
    CustomerComponent,
    BankAccountsComponent,
    NewAccountComponent,
    LoginComponent,
    AuthenticateTemplateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
