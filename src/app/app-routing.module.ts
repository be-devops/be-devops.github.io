import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ServerErrorComponent} from './errors/server-error/server-error.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {ForbidenComponent} from './errors/forbiden/forbiden.component';
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: '500', component: ServerErrorComponent},
  {path: '403', component: ForbidenComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
