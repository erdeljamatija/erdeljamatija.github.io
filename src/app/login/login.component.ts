import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFormValues = { email: '', password: '' };
  registerFormValues = { email: '', password: '' };

  constructor() { }

  async onLoginSubmit() {
    // try {
    //   await this.authService.login(this.loginFormValues.email, this.loginFormValues.password);
    // } catch (error) {
    //   console.error(error);
    // }
  }

  async onRegisterSubmit() {
    // try {
    //   await this.authService.register(this.registerFormValues.email, this.registerFormValues.password);
    // } catch (error) {
    //   console.error(error);
    // }
  }
}
