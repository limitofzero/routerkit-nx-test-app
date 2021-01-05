import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in' },
  { path: 'sign-in', component: AuthComponent }
];

const modules = [
  CommonModule,
  RouterModule.forChild(routes)
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    ...modules
  ]
})
export class AuthModule { }
