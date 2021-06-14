import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AnalyzerRoutingModule } from './analyzer-routing.module';
import { AnalyzerComponent } from './analyzer.component';

@NgModule({
  declarations: [AnalyzerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AnalyzerRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class AnalyzerModule {}
