import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMailPageRoutingModule } from './new-mail-routing.module';

import { NewMailPage } from './new-mail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewMailPageRoutingModule
  ],
  declarations: [NewMailPage]
})
export class NewMailPageModule {}
