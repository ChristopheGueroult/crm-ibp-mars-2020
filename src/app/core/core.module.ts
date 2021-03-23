import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [UiModule, LoginModule, IconsModule],
})
export class CoreModule {}
