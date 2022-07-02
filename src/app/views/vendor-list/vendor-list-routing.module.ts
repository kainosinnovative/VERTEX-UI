import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendorListComponent } from './vendor-list.component';

const routes: Routes = [
  {
    path: '',
    component: VendorListComponent,
    data: {
      // title: $localize`Dashboard`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorListRoutingModule {
}
