import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  mail: string = "";
  password: string = "";

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  signin() {
    this.authenticationService.signin(this.mail, this.password)
    .subscribe(res => console.log(res));
  }

}
