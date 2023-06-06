export interface CategoriaI {
    NivelCategoria: string;
    IVACategoria: string;
    DescripcionCategoria: string;

  }
  
  export class Categoria implements CategoriaI {
    constructor(
      public NivelCategoria: string,
      public IVACategoria: string,
      public DescripcionCategoria: string,
   
    ) {}
  }
  