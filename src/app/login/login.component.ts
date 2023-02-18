import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading:boolean=false;
  loginForm=new FormGroup({

    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-zA-Z-0-9]{8,15}$')])
   
    })
      constructor(private _AuthService:AuthService ,private _Router:Router ) { }
    errorMassage:string='';
      ngOnInit(): void {
        this._AuthService.userData.subscribe({
          next:()=>{
            if(this._AuthService.userData.getValue() !=null){
         this._Router.navigate(['/home'])
            }else{
            
        
            }
          }
            })
      }

//     sendData(data:FormGroup){
//       this.loading=true;
//       console.log(data.value);
//       this ._AuthService.login(data.value).subscribe({
//     next:(res:any)=>{
//     if(res.massage=='success'){ console.log(res); 
//       this.errorMassage='';
//     this._Router.navigate(['home'])
//     this.loading=false;
//     localStorage.setItem('usertoken',res.token)
    
//     }
    
//     else {this.errorMassage=res.massage;}
//   this.loading=false;
//     },
//     error:(err:any)=>{
// this.errorMassage=err.massage;
//     },
//     complete:()=> {this.loading=false;}
//       })
//     }
    
sendData(loginForm:FormGroup){
  this.loading=true; 
  // console.log(data.value);
  this._AuthService.login(loginForm.value).subscribe({
 next:(res:any)=>{
  this.loading=false;
  localStorage.setItem ('userToken',res.token);
  this._AuthService.saveUserData();
  this._Router.navigate(['/home'])
  console.log(res);
},error:(res:any)=>{
  this.errorMassage=res.message;
}

})

}}



