import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { RegisterComponent } from './register/register.component';
import { TVComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard ], component:HomeComponent}, 
  {path:'about',canActivate:[AuthGuard ], component:AboutComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'movies',canActivate:[AuthGuard ], component:MoviesComponent},
  {path:'settings',canActivate:[AuthGuard ], loadChildren:()=>import('./settings/settings.module').then((m)=>m.SettingsModule )},

  {path:'movieDetail/:id/:media_type',canActivate:[AuthGuard ], component:MovieDetailsComponent},
  {path:'peoples',canActivate:[AuthGuard ],component:PeoplesComponent},
  {path:'tv',canActivate:[AuthGuard ], component:TVComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
