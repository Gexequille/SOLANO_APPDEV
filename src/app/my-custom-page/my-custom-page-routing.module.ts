import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCustomPagePage } from './my-custom-page.page';
import { MyCustomPageWithIdComponent } from './my-custom-page-with-id/my-custom-page-with-id.component';

const routes: Routes = [
  {
    path: '',
    component: MyCustomPagePage
  },

  {
    path: ':id',
    component: MyCustomPageWithIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCustomPagePageRoutingModule {}
