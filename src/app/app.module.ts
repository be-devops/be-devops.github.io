import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './layout/menu/menu.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {LoginComponent} from './login/login.component';
import {JwtModule} from '@auth0/angular-jwt';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './auth/token.interceptor';
import {DatePipe} from '@angular/common';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {ServerErrorComponent} from './errors/server-error/server-error.component';
import {ForbidenComponent} from './errors/forbiden/forbiden.component';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {CoursePageComponent} from "./pages/course-page/course-page.component";
import {StaffPageComponent} from "./pages/staff-page/staff-page.component";
import {BlogPageComponent} from "./pages/blog-page/blog-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {SearchResultPageComponent} from "./pages/search-result-page/search-result-page.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    NotFoundComponent,
    ServerErrorComponent,
    ForbidenComponent,
    HomePageComponent,
    AboutPageComponent,
    CoursePageComponent,
    StaffPageComponent,
    BlogPageComponent,
    ContactPageComponent,
    SearchResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: () => {
    //       return localStorage.getItem('access_token');
    //     },
    //     whitelistedDomains: environment.whitelist,
    //     blacklistedRoutes: environment.blacklist
    //   }
    // })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
