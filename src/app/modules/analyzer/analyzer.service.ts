import { Injectable } from '@angular/core';
import { AnalyzerInputData, AnalyzerOutputData } from './analyzer.dto';

@Injectable({
  providedIn: 'root',
})
export class AnalyzerService {
  data: AnalyzerOutputData | undefined;

  calculate(i: AnalyzerInputData): void {
    const r = new AnalyzerOutputData();

    /**** 01. Cálculo das reações VA, VC e VE ****/
    r.forcaVC =
      Math.round(
        ((i.Pw * i.L * i.l3) /
          (2 * i.l3 * i.l4 * (i.elasticidadeCD * 1e9) * (i.areaCD * 1e-6) +
            2 * (i.l4 * i.l5) * (i.elasticidadeEF * 1e9) * (i.areaEF * 1e-6) * i.l2)) *
          1000
      ) / 1000;

    r.forcaVE =
      Math.round(
        ((i.Pw * i.L * (i.elasticidadeEF * 1e9) * (i.areaEF * 1e-6) * i.l2) /
          (2 * i.l3 * i.l4 * (i.elasticidadeCD * 1e9) * (i.areaCD * 1e-6) +
            2 * (i.l4 + i.l5) * (i.elasticidadeEF * 1e9) * (i.areaEF * 1e-6) * i.l2)) *
          1000
      ) / 1000;

    r.forcaVA = Math.round((i.Pw - r.forcaVC - r.forcaVA) * 1000) / 1000;
    /**** FIM (01) ****/

    /**** 02. Cálculo dos deslocamentos ****/
    r.deslocamentoAB =
      Math.round(((r.forcaVA * i.l1) / (i.elasticidadeAB * 1e9 * (i.areaAB * 1e-6))) * 100) / 100;
    r.deslocamentoCD =
      Math.round(((r.forcaVC * i.l2) / (i.elasticidadeCD * 1e9 * (i.areaCD * 1e-6))) * 100) / 100;
    r.deslocamentoEF =
      Math.round(((r.forcaVE * i.l3) / (i.elasticidadeEF * 1e9 * (i.areaEF * 1e-6))) * 100) / 100;
    /**** FIM (02) ****/

    /**** 03. Cálculo das tensões e deformações ****/
    r.tensaoAB = Math.round((r.forcaVA / (i.areaAB * 1e-6)) * 100) / 100;
    r.tensaoCD = Math.round((r.forcaVC / (i.areaCD * 1e-6)) * 100) / 100;
    r.tensaoEF = Math.round((r.forcaVE / (i.areaEF * 1e-6)) * 100) / 100;

    r.deformacaoAB = Math.round((r.forcaVA / (i.elasticidadeAB * 1e9 * (i.areaAB * 1e-6))) * 100) / 100;
    r.deformacaoCD = Math.round((r.forcaVC / (i.elasticidadeCD * 1e9 * (i.areaCD * 1e-6))) * 100) / 100;
    r.deformacaoEF = Math.round((r.forcaVE / (i.elasticidadeEF * 1e9 * (i.areaEF * 1e-6))) * 100) / 100;
    /**** FIM (03) ****/

    this.data = r;
  }

  validate(data: AnalyzerOutputData): any {
    return null;
  }
}
