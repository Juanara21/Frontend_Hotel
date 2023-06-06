export interface HotelesI {
  NIT: string;
  NivelCat: string;
  Nombre: string;
  Direccion: string;
  AnioConstruccion: string;
  Categorium: {
    DescripcionCategoria: string;
  }
  
}

export class Hoteles implements HotelesI {
  constructor(
    public NIT: string,
    public NivelCat: string,
    public Nombre: string,
    public Direccion: string,
    public AnioConstruccion: string,
    public Categorium: { DescripcionCategoria: string}
  
  ) {}
}
