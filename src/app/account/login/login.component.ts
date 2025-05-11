import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Login Auth
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../core/services/authfake.service';
import { first } from 'rxjs/operators';
import { ToastService } from './toast-service';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/Authentication/authentication.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login Component
 */
export class LoginComponent implements OnInit {

  // Login Form
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;

  toast!: false;

  // set the current year
  year: number = new Date().getFullYear();

  constructor(private formBuilder: UntypedFormBuilder,private authenticationService: AuthenticationService,private router: Router,
    private authFackservice: AuthfakeauthenticationService, private route: ActivatedRoute, public toastService: ToastService,
    private store: Store) {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
      }
     }

  ngOnInit(): void {
    if(sessionStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    /**
     * Form Validatyion
     */
     this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
   onSubmit() {
    this.submitted = true;

     // Login Api
     this.store.dispatch(login({ email: this.f['email'].value, password: this.f['password'].value }));
    this.authenticationService.login(this.f['email'].value, this.f['password'].value).subscribe((data:any) => {

      if(data && data.access_token) {
        sessionStorage.setItem('refreshToken', data.refresh_token);
        sessionStorage.setItem('toast', 'true');
        sessionStorage.setItem('currentUser', JSON.stringify({"_id":"629f15c770a470a230cc5d5a","first_name":"adminkjh","email":"admin@themesbrand.com","password":"$2a$12$tOmV5oSs.Itd7KZ6IEV3L.kDnDZz9N2TadTrrnu0M/9ktxplL/lzC","confirm_password":"123456","changePasswordAt":"2022-06-07T09:06:27.077Z","skills":[],"__v":1,"passwordtoken":"2ee488e19e985d36665042e45cd211facac9bc0fc06e8f15bc89805bb34c6f19","passwordtokenexp":"2025-04-22T09:08:37.387Z","exp_year":[],"portfolio":[]}));
        sessionStorage.setItem('token', data.access_token);
        this.router.navigate(['/']);
      } else {
        this.toastService.show(data.data, { classname: 'bg-danger text-white', delay: 15000 });
      }
    });

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // } else {
    //   if (environment.defaultauth === 'firebase') {
    //     this.authenticationService.login(this.f['email'].value, this.f['password'].value).then((res: any) => {
    //       this.router.navigate(['/']);
    //     })
    //       .catch(error => {
    //         this.error = error ? error : '';
    //       });
    //   } else {
    //     this.authFackservice.login(this.f['email'].value, this.f['password'].value).pipe(first()).subscribe(data => {
    //           this.router.navigate(['/']);
    //         },
    //         error => {
    //           this.error = error ? error : '';
    //         });
    //   }
    // }
  }

  /**
   * Password Hide/Show
   */
   toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
