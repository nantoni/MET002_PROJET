import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserService, AlertService } from '@app/_services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.isAuth) {
      this.router.navigate(['/catalogue']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone: ['', Validators.compose([Validators.maxLength(10), Validators.minLength(10)])]
    });

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;


    const user = {
      email: this.f.email.value,
      login: this.f.login.value,
      password: this.f.password.value,
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      address: this.f.address.value,
      postCode: this.f.postCode.value,
      city: this.f.city.value,
      country: this.f.country.value,
      phone: this.f.phone.value
    };

    this.userService.register(user)
      .subscribe(
        data => {
          this.alertService.success('Enregistrement réussi', true);
          this.router.navigate(['/signin']);
        },
        error => {
          if (error == 200) {
            this.router.navigate(['/signin']);
          } else if (error == 418) {
            this.error = 'Cet utilisateur existe déjà!';
          } else {
            this.error = error;
          }
          this.loading = false;
        },
        () => {
          this.router.navigate(['/signin']);
        }
      );

  }

}
