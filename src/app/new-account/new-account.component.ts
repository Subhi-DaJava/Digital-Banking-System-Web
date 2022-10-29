import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../model/customer.model";
import {throwError} from "rxjs";
import {AccountsService} from "../services/accounts.service";
import {CurAccount} from "../model/curAccounts.model";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  errorMessage!: Object;
  newAccountFormGroup!: FormGroup;
  customer!: Customer;
  customerId!: number;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountServie: AccountsService) {
    this.customer = this.router.getCurrentNavigation()?.extras.state as Customer;
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];

    this.newAccountFormGroup = this.fb.group({
/*
      accountType : this.fb.control("chose account type", [Validators.required]),
*/
      id : this.fb.control(this.customerId, [Validators.required, Validators.minLength(1)]),

      balance : this.fb.control(0, [Validators.required]),
/*
      accountStatus : this.fb.control(null, [Validators.required]),
*/
      overDraft: this.fb.control(0, [Validators.required]),
/*
      interestRate: this.fb.control(0, [Validators.required])
*/
    });
  }

  handleSaveNewAccount() {
  let curAccount: CurAccount = this.newAccountFormGroup.value;
    curAccount.customerDTO = this.customer;
    this.accountServie.newCurrentAccount(curAccount.balance, curAccount.overDraft, curAccount.customerDTO.id).subscribe({
    next: data => {
      alert('A new bank account has been added to this customerId:' + curAccount.customerDTO.id);
      this.newAccountFormGroup.reset();
      this.router.navigateByUrl("customer-accounts/" + curAccount.customerDTO.id).then(r=>{});
    },
    error: err => {
      this.errorMessage = err.message;
      return throwError(err);
    }
    });
  }
}
