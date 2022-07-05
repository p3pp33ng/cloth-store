import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from 'src/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('', Validators.required),
    reEnterPassword: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    let soonToBeRegisteredUser = {
      userName: this.registerForm.value["userName"],
      firstName: this.registerForm.value["firstName"],
      lastName: this.registerForm.value["lastName"],
      email: this.registerForm.value["email"],
      password: this.registerForm.value["password"],
      reEnterPassword: this.registerForm.value["reEnterPassword"]
    }
    try {
      this.userService.registerUser(soonToBeRegisteredUser);
    } catch (error) {
      alert('Something went wrong: ' + error);
    }

  }
}
