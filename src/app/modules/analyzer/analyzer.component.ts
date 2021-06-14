import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { AnalyzerService } from './analyzer.service';
import { AnalyzerInputData } from './analyzer.dto';

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
})
export class AnalyzerComponent implements OnInit {
  @HostBinding('class') hostClasses = ['d-flex', 'flex-column', 'flex-grow-1', 'justify-content-center'];

  form!: FormGroup;

  constructor(private _service: AnalyzerService, private _router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      l1: new FormControl(null, [Validators.required, this._number()]),
      l2: new FormControl(null, [Validators.required, this._number()]),
      l3: new FormControl(null, [Validators.required, this._number()]),
      l4: new FormControl(null, [Validators.required, this._number()]),
      l5: new FormControl(null, [Validators.required, this._number()]),
      l6: new FormControl(null, [Validators.required, this._number()]),
      areaAB: new FormControl(null, [Validators.required, this._number]),
      areaCD: new FormControl(null, [Validators.required, this._number]),
      areaEF: new FormControl(null, [Validators.required, this._number]),
      escoamentoAB: new FormControl(null, [Validators.required, this._number()]),
      escoamentoCD: new FormControl(null, [Validators.required, this._number()]),
      escoamentoEF: new FormControl(null, [Validators.required, this._number()]),
      elasticidadeAB: new FormControl(null, [Validators.required, this._number()]),
      elasticidadeCD: new FormControl(null, [Validators.required, this._number()]),
      elasticidadeEF: new FormControl(null, [Validators.required, this._number()]),
      w: new FormControl(null, [Validators.required, this._number()]),
    });
  }

  submit() {
    if (this.form.valid) {
      const form = this.form.getRawValue();
      const data = new AnalyzerInputData();

      data.l1 = form.l1;
      data.l2 = form.l2;
      data.l3 = form.l3;
      data.l4 = form.l4;
      data.l5 = form.l5;
      data.l6 = form.l6;
      data.areaAB = form.areaAB;
      data.areaCD = form.areaCD;
      data.areaEF = form.areaEF;
      data.elasticidadeAB = form.elasticidadeAB;
      data.elasticidadeCD = form.elasticidadeCD;
      data.elasticidadeEF = form.elasticidadeEF;
      data.escoamentoAB = form.escoamentoAB;
      data.escoamentoCD = form.escoamentoCD;
      data.escoamentoEF = form.escoamentoEF;
      data.w = form.w;

      this._service.calculate(data);
      this._router.navigate(['/analisador/relatorio']);
    }
  }

  private _number(): ValidatorFn {
    return (ctrl: AbstractControl): ValidationErrors | null => {
      const value = ctrl.value;

      if (!isNaN(value)) {
        return !(value > 0.0) ? { number: true } : null;
      }

      return null;
    };
  }
}
