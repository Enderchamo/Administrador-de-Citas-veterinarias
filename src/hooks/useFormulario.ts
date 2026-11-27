import { useState } from "react";

import type { DatosFormulario } from "../types";

/**
 * Objeto con los datos iniciales del formulario.
 * Para inicializar el estado de los datos del formulario, se crea un objeto con las propiedades necesarias para el formulario, todas inicializadas como cadenas vacías.
 */
const datosIniciales: DatosFormulario = { //Para inicializar el estado de los datos del formulario, se crea un objeto con las propiedades necesarias para el formulario, todas inicializadas como cadenas vacías.
  nombre: "",
  propietario: "",
  email: "",
  fecha: "",
  sintomas: "",
};

export function useFormulario() {
  const [datos, setDatos] = useState<DatosFormulario>(datosIniciales); // Inicializa el estado de los datos del formulario con los datos iniciales. se crea un estado que es un objeto con las propiedades necesarias para el formulario, todas inicializadas como cadenas vacías.

  const limpiarFormulario = () => { // Función para limpiar el formulario, restableciendo los datos a los valores iniciales.
    setDatos({ ...datosIniciales });
  };




// Función para manejar los cambios en los campos del formulario.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target; // Obtiene el nombre y el valor del campo que ha cambiado. El nombre corresponde a la propiedad del objeto de datos que se va a actualizar, y el valor es el nuevo valor ingresado por el usuario.

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
