import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Z][a-zA-Z-0-9]{8,15}$'),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(16),
      Validators.max(60),
    ]),
  });
  error: string = '';
  isLoading: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {}
  sendData(RegisterForm: FormGroup) {
    this.isLoading = true;
    this._AuthService.register(RegisterForm.value).subscribe({
      next:(res) => { 
        this.isLoading = false;
        if (res.message === 'success')
         {
          // navigate home or login
          this._Router.navigate(['/login']); 
        } 
        else {

          this.error = res.message;
        }

      }
    });
  }
}

// if(res.message==='success'){
//   // navigate home or login
//   this._Router.navigate(['/login']) // path and data (id)
// }
// else{

// this.error=res.message;
// }
