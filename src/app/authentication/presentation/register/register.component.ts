import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() onRegisterEvent = new EventEmitter();
  @Input() isSubmitted: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  inputUserData = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get username() {
    return this.inputUserData.get('username');
  }
  
  get email() {
    return this.inputUserData.get('email');
  }

  get password() {
    return this.inputUserData.get('password');
  }

  get isAbleSubmit() {
    return this.inputUserData.invalid;
  }

  onRegister() {
    const registerData = this.inputUserData.value;
    this.onRegisterEvent.emit(registerData);
  }
}
