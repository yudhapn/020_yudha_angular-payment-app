import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() onLoginEvent = new EventEmitter();
  @Input() isSubmitted: boolean = false;
  constructor() {}

  inputUserData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get email() {
    return this.inputUserData.get('email');
  }

  get password() {
    return this.inputUserData.get('password');
  }

  get isAbleSubmit() {
    return this.inputUserData.invalid;
  }

  onLogin() {
    const loginData = this.inputUserData.value;
    this.onLoginEvent.emit(loginData);
  }

  ngOnInit(): void {}
}
