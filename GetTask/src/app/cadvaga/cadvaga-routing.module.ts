import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadvagaPage } from './cadvaga.page';

const routes: Routes = [
  {
    path: '',
    component: CadvagaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadvagaPageRoutingModule {}
