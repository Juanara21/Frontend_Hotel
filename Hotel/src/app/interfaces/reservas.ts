export interface ReservaI {
    NIT_HOTEL: number;
    Cedula: number;
    NIT_A_G: number;
    Fecha_ingreso: Date;
    Fecha_salida: Date;
    Hora_ingreso: string;

  }
  
  export class Reserva implements ReservaI {
    constructor(
      public NIT_HOTEL: number,
      public Cedula: number,
      public NIT_A_G: number,
      public Fecha_ingreso: Date,
      public Fecha_salida: Date,
      public Hora_ingreso: string,
    
    ) {}
  }
  