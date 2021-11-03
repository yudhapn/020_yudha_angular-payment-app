import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationViewModel } from './authentication-view-model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  isProgressbarVisible = false;
  isSubmitted = false;
  constructor(
    private viewModel: AuthenticationViewModel,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  login(loginData: any) {
    this.isProgressbarVisible = true;
    this.isSubmitted = true;
    this.viewModel.login(loginData).subscribe(
      (res) => {
        if (res) {
          this.isProgressbarVisible = false;
          this.isSubmitted = false;
          this.viewModel.setAuthorizationToken(res.token);
          this.router.navigate(['payment-register']);
        }
      },
      (err) => {
        console.log(err);
        this.openSnackBar('Username or password is not valid!', 'close');
        this.isProgressbarVisible = false;
        this.isSubmitted = false;
      }
    );
  }

  register(registerData: any) {
    console.log(registerData);
    this.isProgressbarVisible = true;
    this.isSubmitted = true;
    this.viewModel.register(registerData).subscribe(
      (res) => {
        if (res) {
          console.log(res);
          this.openSnackBar('Berhasil register, silahkan login.', 'close');
          this.isProgressbarVisible = false;
          this.isSubmitted = false;
        }
      },
      (err) => {
        console.log(err);
        this.openSnackBar('Something went wrong!', 'close');
        this.isProgressbarVisible = false;
        this.isSubmitted = false;
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
