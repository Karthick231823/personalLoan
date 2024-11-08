import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisbursementComponent } from './disbursement/disbursement.component';
import { EsignComponent } from './esign/esign.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoginComponent } from './login/login.component';
import { LodaerComponent } from './lodaer/lodaer.component';

@NgModule({
  declarations: [
    AppComponent,
    DisbursementComponent,
    EsignComponent,
    LoanDetailsComponent,
    PersonalDetailsComponent,
    SideMenuComponent,
    LoginComponent,
    LodaerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
