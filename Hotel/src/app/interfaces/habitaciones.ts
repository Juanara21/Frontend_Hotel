export interface HabitacionI {
    Codigo_habitacion: string;
    NIT_HOTEL: string;
    Tipo_habitacion: string;
 
  }
  
  export class Habitacion implements HabitacionI {
    constructor(
      public Codigo_habitacion: string,
      public NIT_HOTEL: string,
      public Tipo_habitacion: string,
   
    ) {}
  }
  