import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './component/my-new-component/my-new-component.component';
import { TestPipePipe } from './pipe/test-pipe.pipe';
import { UsercomponentComponent } from './component/usercomponent/usercomponent.component'; // usercrud
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { ContactusComponentComponent } from './component/contactus-component/contactus-component.component';
import { CustomerformComponentComponent } from './component/customerform-component/customerform-component.component';
import { AnalysisComponentComponent } from './component/analysis-component/analysis-component.component';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { SignupComponent } from './component/signup/signup.component';
import { OrderComponent } from './order/order.component';
import { PremiumOrderComponent } from './premium-order/premium-order.component';
import { NormalOrderComponent } from './normal-order/normal-order.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    TestPipePipe,
    UsercomponentComponent,
    HomeComponentComponent,
    ContactusComponentComponent,
    CustomerformComponentComponent,
    AnalysisComponentComponent,
    LoginpageComponent,
    SignupComponent,
    OrderComponent,
    PremiumOrderComponent,
    NormalOrderComponent,
    PageNotFoundComponent,
    DashboardComponent,
    CustomerDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
