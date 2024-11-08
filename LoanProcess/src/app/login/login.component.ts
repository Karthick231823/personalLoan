import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = "Login!";

  constructor(private router: Router) { }

  ngOnInit(): void {
  const loading =   document.getElementById('loader') as HTMLElement;
   loading.style.display ="flex"

   setTimeout(function () {
  loading.style.display ="none"

  }, 1000)
  }

  personalDet() {
  const loading =   document.getElementById('loader') as HTMLElement;

    setTimeout(function () {
      loading.style.display ="none"
    
      }, 1000)
    this.router.navigate(["/personaldeatils"]);

  }
}
