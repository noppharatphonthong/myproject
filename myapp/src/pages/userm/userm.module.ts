import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsermPage } from './userm';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    UsermPage,
  ],
  imports: [
    IonicPageModule.forChild(UsermPage),
    ChartsModule
  ],
})
export class UsermPageModule {}
