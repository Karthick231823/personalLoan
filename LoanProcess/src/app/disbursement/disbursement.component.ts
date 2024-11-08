import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disbursement',
  templateUrl: './disbursement.component.html',
  styleUrls: ['./disbursement.component.css']
})
export class DisbursementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const loading =   document.getElementById('loader') as HTMLElement;
    loading.style.display ="flex"
 
    setTimeout(function () {
   loading.style.display ="none"
 
   }, 1000)
  }
  logout() {
    this.router.navigate(["/login"]);
  }
}
