import {NgModule} from '@angular/core';
import {PageRoutingModule} from './page-routing.module';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {CoursePageComponent} from './course-page/course-page.component';
import {StaffPageComponent} from './staff-page/staff-page.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {SearchResultPageComponent} from './search-result-page/search-result-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    CoursePageComponent,
    StaffPageComponent,
    BlogPageComponent,
    ContactPageComponent,
    SearchResultPageComponent
  ],
  imports: [
    PageRoutingModule,
  ],
  providers: []
})
export class PageModule {
}
