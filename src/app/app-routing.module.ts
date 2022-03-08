import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SdashbordComponent } from './sdashbord/sdashbord.component';
import { TdashbordComponent } from './tdashbord/tdashbord.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"sdashboard",component:SdashbordComponent},
  {path:"tdashboard",component:TdashbordComponent},
  {path:"home",component:HomeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
