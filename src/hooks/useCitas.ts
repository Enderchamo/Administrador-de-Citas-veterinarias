import { useEffect, useState } from "react";
import type { Cita, DatosFormulario } from "../types";
import { validarCita } from "../helpers/validarCita";

export function useCitas() {
  const [citas, SetCitas] = useState<Cita[]>(obtenerCitas);

  function obtenerCitas(): Cita[] {
    const citasGuardadas = localStorage.getItem("citas");
    if (citasGuardadas !== null) {
      return JSON.parse(citasGuardadas);
    } else return [];
  }

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (datos: DatosFormulario) => {
    if (validarCita(datos)) {
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

  function editarCita(cita: Cita) {
    if (validarCita(cita)) {
      SetCitas((prev) =>
        prev.map((citaActual) => {
          if (citaActual.id === cita.id) {
            const citaEditada = { ...cita };
            return citaEditada;
          } else {
            return citaActual;
          }
        }),
      );
      return true;
    } else {
      alert("Todos los campos son obligatorios");
      return false;
    }
  }

  const eliminarCita = (id: string) => {
    SetCitas((prev) => prev.filter((cita) => id !== cita.id));
  };

  return {
    citas,
    agregarCita,
    eliminarCita,
    editarCita,
  };
}
