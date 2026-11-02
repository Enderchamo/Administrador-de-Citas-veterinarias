import { useState } from "react";

import type { DatosFormulario } from "../types";

const datosIniciales: DatosFormulario = {
  nombre: "",
  propietario: "",
  email: "",
  fecha: "",
  sintomas: "",
};

export function useFormulario() {
  const [datos, setDatos] = useState<DatosFormulario>(datosIniciales);

  const limpiarFormulario = () => {
    setDatos({ ...datosIniciales });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setDatos((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    datos,
    setDatos,
    limpiarFormulario,
    handleChange
  };
}
