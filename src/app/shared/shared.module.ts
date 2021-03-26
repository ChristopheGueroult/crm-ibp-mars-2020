import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [
    TableLightComponent,
    BtnComponent,
    TableDarkComponent,
    TotalPipe,
    StateDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ReactiveFormsModule,
    TemplatesModule,
    IconsModule,
    TableLightComponent,
    BtnComponent,
    TableDarkComponent,
    TotalPipe,
    StateDirective,
  ],
})
export class SharedModule {}
