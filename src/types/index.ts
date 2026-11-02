export type Cita = {
  id: string;
  nombre: string;
  propietario: string;
  email: string;
  fecha: string;
  sintomas: string;
};

export type DatosFormulario = Omit<Cita, "id">;
