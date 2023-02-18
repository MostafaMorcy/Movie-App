import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { TVComponent } from './tv/tv.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ApikeyInterceptor } from './apikey.interceptor';
import { WatchPipe } from './watch.pipe';
import { SearchPipe } from './search.pipe';
import  { BrowserAnimationsModule }  from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MoviesComponent,
    TVComponent,
    AboutComponent,
    NotFoundComponent,
    PeoplesComponent,
    MovieDetailsComponent,
    WatchPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,FormsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [{ 
    provide:HTTP_INTERCEPTORS,
    useClass:ApikeyInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
