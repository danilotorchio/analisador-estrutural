import { Component, HostBinding } from '@angular/core';
import { AnalyzerService } from '../analyzer/analyzer.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
})
export class ReportComponent {
  @HostBinding('class') hostClasses = ['d-flex', 'flex-column', 'flex-grow-1'];

  constructor(public service: AnalyzerService) {}
}
