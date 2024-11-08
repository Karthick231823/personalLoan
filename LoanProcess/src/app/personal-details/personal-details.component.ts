import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
})
export class PersonalDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    const loading =   document.getElementById('loader') as HTMLElement;
    loading.style.display ="flex"
 
    setTimeout(function () {
   loading.style.display ="none"
 
   }, 1000)
  }
  loanDetailsPage(){
    this.router.navigate(["/loandetails"]);

  }

  
  selectChange() {
    const selectElm = document.getElementById('mySelect') as HTMLSelectElement;
    const selectValue = selectElm.value;
  
    document.getElementById('document1')!.style.display = selectValue === '01' ? 'block' : 'none';
    document.getElementById('document2')!.style.display = selectValue === '02' ? 'block' : 'none';
    document.getElementById('document3')!.style.display = selectValue === '03' ? 'block' : 'none';
  }
  selectChange2() {
    const selectElm = document.getElementById('mySelect1') as HTMLSelectElement;
    const selectValue = selectElm.value;
    document.querySelectorAll('.salaryDet').forEach((element) => {
      (element as HTMLElement).style.display = selectValue === '01' ? 'block' : 'none';
    });
    document.getElementById('salary2')!.style.display = selectValue === '02' ? 'block' : 'none';
    document.getElementById('salary3')!.style.display = selectValue === '03' ? 'block' : 'none';
  }
  
}
