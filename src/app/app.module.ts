import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';





import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import{AngularFireModule} from'angularfire2';
 import{AngularFireDatabaseModule} from 'angularfire2/database';
 import{AngularFireAuthModule}from'angularfire2/auth';
 import{environment}from '../environments/environment';
import { FirebaseService } from './service/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DashboardComponent,
    PriceComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      
      {path:'search',component:SearchComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'price',component:PriceComponent},
      {path:'about',component:AboutComponent},
      

      
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

