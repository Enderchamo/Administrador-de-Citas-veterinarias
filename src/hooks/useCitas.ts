import { useState } from "react";
import type { Cita, DatosFormulario } from "../types";

import React from "react";

export function useCitas() {
  const [citas, SetCitas] = useState<Cita[]>([]);

  const agregarCita = (datos: DatosFormulario) => {
    const nuevaCita: Cita = {
      ...datos,
      id: crypto.randomUUID(),
    };
    SetCitas((prev) => [...prev, nuevaCita]);
  };

  return {
    citas,
    agregarCita,
  };
}
