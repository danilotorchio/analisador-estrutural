import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: 'analisador',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'estrutura',
        loadChildren: () => import('./modules/analyzer/analyzer.module').then(m => m.AnalyzerModule),
      },
      {
        path: 'relatorio',
        loadChildren: () => import('./modules/report/report.module').then(m => m.ReportModule),
      },
      {
        path: '**',
        redirectTo: '/analisador/estrutura',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/analisador/estrutura',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
