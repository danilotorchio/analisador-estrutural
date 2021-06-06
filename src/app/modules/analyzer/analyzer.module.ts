import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyzerRoutingModule } from './analyzer-routing.module';
import { AnalyzerComponent } from './analyzer.component';

@NgModule({
  declarations: [AnalyzerComponent],
  imports: [CommonModule, AnalyzerRoutingModule],
})
export class AnalyzerModule {}
