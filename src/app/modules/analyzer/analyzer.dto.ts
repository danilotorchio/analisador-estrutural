export class AnalyzerInputData {
  l1: number = 0.0;
  l2: number = 0.0;
  l3: number = 0.0;
  l4: number = 0.0;
  l5: number = 0.0;
  l6: number = 0.0;
  areaAB: number = 0.0;
  areaCD: number = 0.0;
  areaEF: number = 0.0;
  elasticidadeAB: number = 0.0;
  elasticidadeCD: number = 0.0;
  elasticidadeEF: number = 0.0;
  escoamentoAB: number = 0.0;
  escoamentoCD: number = 0.0;
  escoamentoEF: number = 0.0;
  w: number = 0.0;

  public get L(): number {
    return this.l1 + this.l2 + this.l3;
  }
  get Pw(): number {
    return (this.w * 1e3) * this.L;
  };
  get Lw(): number {
    return this.L / 2;
  }

  constructor() {}
}

export class AnalyzerOutputData {
  // Forças (reações)
  forcaVA: number = 0.0;
  forcaVC: number = 0.0;
  forcaVE: number = 0.0;

  // Deslocamentos (delta)
  deslocamentoAB: number = 0.0;
  deslocamentoCD: number = 0.0;
  deslocamentoEF: number = 0.0;

  // Deformações (E)
  deformacaoAB: number = 0.0;
  deformacaoCD: number = 0.0;
  deformacaoEF: number = 0.0;

  // tensões (sigma)
  tensaoAB: number = 0.0;
  tensaoCD: number = 0.0;
  tensaoEF: number = 0.0;

  constructor() {}
}
