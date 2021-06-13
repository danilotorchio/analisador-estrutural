import { Component, OnInit, HostBinding } from '@angular/core';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

type FormData = {
  l1: number;
  l2: number;
  l3: number;
  l4: number;
  l5: number;
  l6: number;
  w: number;
  limiteEscoamento: number;
  moduloElasticidade: number;
};

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
})
export class AnalyzerComponent implements OnInit {
  @HostBinding('class') hostClasses = ['d-flex', 'flex-column', 'flex-grow-1'];

  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      l1: new FormControl(null, [Validators.required, this._number()]),
      l2: new FormControl(null, [Validators.required, this._number()]),
      l3: new FormControl(null, [Validators.required, this._number()]),
      l4: new FormControl(null, [Validators.required, this._number()]),
      l5: new FormControl(null, [Validators.required, this._number()]),
      l6: new FormControl(null, [Validators.required, this._number()]),
      w: new FormControl(null, [Validators.required, this._number()]),
      limiteEscoamento: new FormControl(null, [Validators.required, this._number()]),
      moduloElasticidade: new FormControl(null, [Validators.required, this._number()]),
    });
  }

  submit() {
    if (this.form.valid) {
      const data = this.form.getRawValue() as FormData;
      console.log(data);
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
