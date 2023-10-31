import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { SignUpComponent } from './core/auth/sign-up/sign-up.component';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/visitors/visitors.module').then(mod => mod.VisitorsModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./core/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./core/user/user.module').then(mod => mod.UserModule)
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
