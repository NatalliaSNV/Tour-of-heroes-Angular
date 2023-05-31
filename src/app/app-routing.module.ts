import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import { DetailsComponent } from './details/details/details.component';
import { DetailsResolverResolver } from './details-resolver.resolver';

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'details/:id', component: DetailsComponent, resolve: {post: DetailsResolverResolver}}
    // {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
