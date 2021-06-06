import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [BaseLayoutComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutModule {}
