import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./feature/detail/detail.module').then(m => m.DetailModule),
  },
  {
    path: 'payment',
    loadChildren: () => import('./feature/payment/payment.module').then(m => m.PaymentModule),
  },
  {
    path: 'success',
    loadChildren: () => import('./feature/success/success.module').then(m => m.SuccessModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
