import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)},
  {path: '', component: LayoutComponent, children: [
    {path: 'accompanying', loadChildren: () => import('./feature/accompanying/accompanying.module').then(m => m.AccompanyingModule)}
  ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
