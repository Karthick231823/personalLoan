import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-esign',
  templateUrl: './esign.component.html',
  styleUrls: ['./esign.component.css']
})
export class EsignComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const loading =   document.getElementById('loader') as HTMLElement;
    loading.style.display ="flex"
 
    setTimeout(function () {
   loading.style.display ="none"
 
   }, 1000)
   
    const otpInput = document.getElementById('otpInput') as HTMLInputElement;
    const otpSuucessms = document.getElementById('otpSucc') as HTMLInputElement;
    const proceedBtn = document.getElementById('proceed') as HTMLInputElement;
    const message = document.getElementById('otpsucess') as HTMLElement;

    otpInput.addEventListener('input', function () {
      if (otpInput.value.length === 6) {
        otpSuucessms.style.display = "none"
        setTimeout(function () {
          message.style.display = 'block';
          proceedBtn.style.display="flex";
        }, 1000)

      } else {
        message.style.display = 'none';
      }
    });


  }
  otpSent() {
    let otpSent = document.getElementById("otpsection") as HTMLElement;
    otpSent.style.display = "block";
  }
  branchModal() {
    let branch = document.getElementById("branchPop") as HTMLElement;
    branch.style.display = "block";
  }
  popupClose() {
    let otpSent = document.getElementById("otpsection") as HTMLElement;
    otpSent.style.display = "none";
  }
  logout() {
    this.router.navigate(["/login"]);
  }
  disbursePage() {
    this.router.navigate(["/disburse"]);

  }






}
