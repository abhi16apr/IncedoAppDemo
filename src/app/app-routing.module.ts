import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNewComponentComponent } from './component/my-new-component/my-new-component.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { UsercomponentComponent } from './component/usercomponent/usercomponent.component';
import { Component } from '@angular/core';
import { ContactusComponentComponent } from './component/contactus-component/contactus-component.component';
import { CustomerformComponentComponent } from './component/customerform-component/customerform-component.component';

import { AnalysisComponentComponent } from './component/analysis-component/analysis-component.component';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { SignupComponent } from './component/signup/signup.component';
import { PremiumOrderComponent } from './premium-order/premium-order.component';
import { OrderComponent } from './order/order.component';
import { NormalOrderComponent } from './normal-order/normal-order.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginpageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'signup', component: SignupComponent, },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponentComponent },
      { path: 'home', component: HomeComponentComponent },
      { path: 'customer', component: MyNewComponentComponent },
      { path: 'user', component: UsercomponentComponent },
      { path: 'contactus', component: ContactusComponentComponent },
      {
        path: 'order', component: OrderComponent,
        children: [
          { path: '', redirectTo: 'normalOrder', pathMatch: 'full' },
          { path: 'normalOrder', component: NormalOrderComponent },
          { path: 'premiumOrder', component: PremiumOrderComponent },
        ]
      },
      { path: 'customerform', component: CustomerformComponentComponent },
      { path: 'analysis', component: AnalysisComponentComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
