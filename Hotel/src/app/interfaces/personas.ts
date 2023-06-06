export interface PersonaI {
    nombrePersona: string;
    direccionPersona: string;
    telefonoPersona: string;
    apellidoPersona: string;
    cedulaPersona: string;
  
  }
  
  export class Persona implements PersonaI {
    constructor(
      public nombrePersona: string,
      public direccionPersona: string,
      public telefonoPersona: string,
      public apellidoPersona: string,
      public cedulaPersona: string,
 
    ) {}
  }
  