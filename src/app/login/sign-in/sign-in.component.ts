import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {

    init_plugins();
  }


  goSignIn() {
    console.log('quye  eu pues ');
  //  this.router.navigate( ['/dashboard'] );
  }

}
