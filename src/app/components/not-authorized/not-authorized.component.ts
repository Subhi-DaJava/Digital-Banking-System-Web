import { Component, OnInit } from '@angular/core';
import {AuthStateService} from "../../auth-services/auth-state.service";

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.css']
})
export class NotAuthorizedComponent implements OnInit {

  constructor(public authState: AuthStateService) { }

  ngOnInit(): void {
  }

}
