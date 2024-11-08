import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { DisbursementComponent } from './disbursement/disbursement.component';
import { EsignComponent } from './esign/esign.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'personaldeatils', component: PersonalDetailsComponent },
  { path: 'sideMenu', component: SideMenuComponent },
  { path: 'loandetails', component: LoanDetailsComponent },
  { path: 'esignature', component: EsignComponent },
  { path: 'disburse', component: DisbursementComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
