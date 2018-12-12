import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';

import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from '../home/welcome.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent },
      {path: 'welcome', component: WelcomeComponent}
    ])
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class UserModule { }
