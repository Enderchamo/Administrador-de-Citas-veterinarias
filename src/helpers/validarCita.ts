import type { DatosFormulario } from "../types";

 
 export function validarCita(datos: DatosFormulario): boolean {
    return Object.values(datos).every((e) => e.trim() !== "");
  }