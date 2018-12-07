import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../services/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private user: User;
  private isEmailValid: boolean;
  private passwordMatch

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
  }

  public creatUser(): void {
    console.log(this.user);
}

public  verifyEmail(): void {
    this.userService.getByEmail(this.user.email).subscribe(
      resp => {
        this.isEmailValid = false;
      }, resp => {
        this.isEmailValid = true;
      }
    );
}
public comparePasswords(): void {
  this.passwordMatch = this.user.password === this.user.verifiedPassword;
}

public validateRegisterationForm(): boolean {
    return this.isEmailValid === undefined;
}
}
