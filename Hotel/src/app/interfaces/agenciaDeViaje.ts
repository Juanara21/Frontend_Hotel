export interface AgenciaViajesI {
    NIT_A_V: string;
    Nombre: string;
    Direccion: string;
    Telefono: string;
    Ciudad: string;
 
  }
  
  export class AgenciaViajes implements AgenciaViajesI {
    constructor(
      public NIT_A_V: string,
      public Nombre: string,
      public Direccion: string,
      public Telefono: string,
      public Ciudad: string,
   
    ) {}
  }
  