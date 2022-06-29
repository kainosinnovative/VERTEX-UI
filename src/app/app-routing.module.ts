import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { AdminmanagementComponent } from './views/adminmanagement/adminmanagement.component';
// import { RegisterComponent } from './register/register.component';

const newLocal = './views/register/register.module';
// import { RegisterComponent } from './views/pages/register/register.component';
// import { DashboardComponent } from './views/dashboard/dashboard.component';
const routes: Routes = [
  { path:'', component:LoginComponent, data: { title: 'login'}},
  // { path:'', component:RegisterComponent, data: { title: 'register'}},

  // { path:'dashboard', component:DashboardComponent, data: { title: 'register'}},
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      // title: 'Home'
    },
    children: [
      {
        path: 'vendormanagement',
        loadChildren: () =>
          import('./views/vendormanagement/vendormanagement.module').then((m) => m.VendorModule)
      },
    
     
      {
        path: 'adminmanagement',
        loadChildren: () =>
          import('./views/adminmanagement/adminmanagement.module').then((m) => m.AdminModule)
      },
      {
        path: 'Logout',
        loadChildren: () =>
          import('./views/logout/logout.module').then((m) => m.LogoutModule)
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./views/register/register.module').then((m) => m.RegisterModule)
      },
      // {
      //   path: 'base',
      //   loadChildren: () =>
      //     import('./views/base/base.module').then((m) => m.BaseModule)
      // },
      // {
      //   path: 'buttons',
      //   loadChildren: () =>
      //     import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      // },
      // {
      //   path: 'forms',
      //   loadChildren: () =>
      //     import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      // },
      // {
      //   path: 'charts',
      //   loadChildren: () =>
      //     import('./views/charts/charts.module').then((m) => m.ChartsModule)
      // },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      // {
      //   path: 'notifications',
      //   loadChildren: () =>
      //     import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      // },
      // {
      //   path: 'widgets',
      //   loadChildren: () =>
      //     import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      // },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'admin',
    component: AdminmanagementComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   data: {
  //     title: 'Register Page'
  //   }
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   data: {
  //     title: 'Register Page'
  //   }
  // },
  // {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
