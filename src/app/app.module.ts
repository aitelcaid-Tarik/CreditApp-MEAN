import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './main/home/home.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { AnnuiteComponent } from './main/annuite/annuite.component';
import { CapitalComponent } from './main/capital/capital.component';
import { DureeComponent } from './main/duree/duree.component';
import { SliderComponent } from './main/slider/slider.component';
import { ContactUsComponent } from './main/contact-us/contact-us.component';
import { FooterComponent } from './main/footer/footer.component';


import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
import { CreditsService } from './services/credits.service';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatIconModule} from '@angular/material/icon';
import { TableComponent } from './main/table/table.component';

const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'annuite', component: AnnuiteComponent, canActivate: [AuthGuard] },
  { path: 'capital', component: CapitalComponent, canActivate: [AuthGuard] },
  { path: 'duree', component: DureeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    AnnuiteComponent,
    CapitalComponent,
    DureeComponent,
    SliderComponent,
    ContactUsComponent,
    FooterComponent,
    TableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatCarouselModule.forRoot(),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    CarouselModule,
    MatIconModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    UserService,
    CreditsService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
