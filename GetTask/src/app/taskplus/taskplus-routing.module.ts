import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskplusPage } from './taskplus.page';

const routes: Routes = [
  {
    path: '',
    component: TaskplusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskplusPageRoutingModule {}