import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckmeterPage } from './checkmeter';

@NgModule({
  declarations: [
    CheckmeterPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckmeterPage),
  ],
})
export class CheckmeterPageModule {}
