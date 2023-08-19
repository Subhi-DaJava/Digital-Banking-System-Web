import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth-services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: this.formBuilder.control("", [Validators.required]),
      password: this.formBuilder.control("", [Validators.required]),
    });
  }

  public login() {
      //console.log(this.formLogin.value);

    let username = this.formLogin.value.username;
    let password = this.formLogin.value.password;

    this.authService.login(username, password).subscribe({
      next: userAuth => {
        console.log("JWT Token retrieved from backend: ");
        console.log(userAuth);
        this.authService.loadProfile(userAuth);
      }, error: err => {
        console.log("Error: " + err.message);
        this.errorMessage = err.message;
      }
    });
  }
}
