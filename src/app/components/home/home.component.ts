import { Component, OnInit } from '@angular/core';
import {AuthStateService} from "../../auth-services/auth-state.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authState: AuthStateService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authState.logout();
  }
}
