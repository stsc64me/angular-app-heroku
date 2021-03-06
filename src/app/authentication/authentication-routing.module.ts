import { UnathenticationComponent } from './unathentication/unathentication.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthenticationComponent
}, {
    path: 'logout',
    component: UnathenticationComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
