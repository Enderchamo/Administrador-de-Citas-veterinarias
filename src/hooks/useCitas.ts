import { useState } from "react";
import type { Cita, DatosFormulario } from "../types";

import React from "react";

export function useCitas() {
  const [citas, SetCitas] = useState<Cita[]>([]);

  const agregarCita = (datos: DatosFormulario) => {
    if (Object.values(datos).every((e) => e.trim() !== "")) {
      const nuevaCita: Cita = {
        ...datos,
        id: crypto.randomUUID(),
      };
      SetCitas((prev) => [...prev, nuevaCita]);
      return true;
    } else {
      alert("Todos los campos son obligatorios");
      return false;
    }
  };

  
  function editarCita(cita:Cita) {
    
    

  }

  const eliminarCita = (id: string) => {
    SetCitas((prev) => prev.filter((cita) => id !== cita.id));
  };

  return {
    citas,
    agregarCita,
    eliminarCita,
  };
}
