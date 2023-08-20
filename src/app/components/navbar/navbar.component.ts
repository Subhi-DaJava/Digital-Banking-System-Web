import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthStateService} from "../../auth-services/auth-state.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, public authStateService: AuthStateService) { }

  ngOnInit(): void {
  }

  getAllBankAccounts() {
    this.router.navigateByUrl("/auth/bank-accounts").then();
  }

  logout() {
    this.authStateService.logout();
  }
}
