import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from '../errors/not-found/not-found.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {SearchResultPageComponent} from "./search-result-page/search-result-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {BlogPageComponent} from "./blog-page/blog-page.component";
import {StaffPageComponent} from "./staff-page/staff-page.component";
import {CoursePageComponent} from "./course-page/course-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";

const subRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    children: [
      {path: 'home', component: HomePageComponent},
      {path: 'home/about', component: AboutPageComponent},
      {path: 'courses', component: CoursePageComponent},
      {path: 'teacher', component: StaffPageComponent},
      {path: 'blog', component: BlogPageComponent},
      {path: 'contact', component: ContactPageComponent},
      {path: 'search-result', component: SearchResultPageComponent},
      {path: '**', component: NotFoundComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(subRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageRoutingModule {
}
