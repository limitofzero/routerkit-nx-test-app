import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
