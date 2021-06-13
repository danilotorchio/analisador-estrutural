import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
})
export class BaseLayoutComponent {
  @HostBinding('class') hostClasses = ['d-flex', 'flex-column', 'flex-grow-1'];
}
