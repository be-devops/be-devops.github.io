import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {ServerErrorComponent} from './errors/server-error/server-error.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {ForbidenComponent} from './errors/forbiden/forbiden.component';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {CoursePageComponent} from "./pages/course-page/course-page.component";
import {StaffPageComponent} from "./pages/staff-page/staff-page.component";
import {BlogPageComponent} from "./pages/blog-page/blog-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {SearchResultPageComponent} from "./pages/search-result-page/search-result-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'courses', component: CoursePageComponent},
  {path: 'teacher', component: StaffPageComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'search-result', component: SearchResultPageComponent},
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
