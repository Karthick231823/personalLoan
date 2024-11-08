import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const loading =   document.getElementById('loader') as HTMLElement;
    loading.style.display ="flex"
 
    setTimeout(function () {
   loading.style.display ="none"
 
   }, 1000)
  }
  esinPage(){
    this.router.navigate(["/esignature"]);
    
  }
  logout() {
    this.router.navigate(["/login"]);
  }
}
