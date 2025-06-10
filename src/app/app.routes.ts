import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ParentComponent } from './pages/parent/parent.component';

export const routes: Routes = [
//     {
//     path: '',
//     loadComponent: () =>
//       import('./pages/home/home.component').then((m) => m.HomeComponent)
//   },
//   {
//     path: 'about',
//     loadComponent: () =>
//       import('./pages/about/about.component').then((m) => m.AboutComponent)
//   },
//   {
//     path: 'contact',
//     loadComponent: () =>
//       import('./pages/contact/contact.component').then((m) => m.ContactComponent)
//   },
//   {
//     path: '**',
//     redirectTo: ''
//   }
  { path: 'home', component: HomeComponent }, //Inital loading
//   Below components are loaded via Lazy Loaded components 
// {
//   path: 'home',
//   loadComponent: () =>
//     import('./pages/home/home.component').then(m => m.HomeComponent)
// },
{
  path: 'about',
  loadComponent: () =>
    import('./pages/about/about.component').then(m => m.AboutComponent)
},
{
  path: 'contact',
  loadComponent: () =>
    import('./pages/contact/contact.component').then(m => m.ContactComponent)
},
{
  path: '',
  loadComponent: () =>
    import('./pages/parent/parent.component').then(m => m.ParentComponent)
},
{
  path: '**',
  redirectTo: '',
}

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }