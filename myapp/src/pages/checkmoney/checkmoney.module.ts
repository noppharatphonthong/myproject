import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckmoneyPage } from './checkmoney';

@NgModule({
  declarations: [
    CheckmoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckmoneyPage),
  ],
})
export class CheckmoneyPageModule {}
