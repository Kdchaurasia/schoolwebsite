import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { TdashbordComponent } from './tdashbord/tdashbord.component';
import { SdashbordComponent } from './sdashbord/sdashbord.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatFormFieldModule, } from '@angular/material/form-field'; 
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './home/home.component'; 




@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    LoginComponent,
    TdashbordComponent,
    SdashbordComponent,
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule, 
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
 HttpClientModule ,
 MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
