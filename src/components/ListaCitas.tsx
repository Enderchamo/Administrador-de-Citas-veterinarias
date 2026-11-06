import type { Cita } from "../types";
import CitaComponent from "./Cita";

type ListaCitasProps = {
  citas: Cita[];
};

export default function ListaCitas({ citas }: ListaCitasProps) {
  return <div id="citas">{mostrarCitas(citas)}</div>;
}


//Funcion de renderizado
function mostrarCitas(citas: Cita[]) {
  if (citas.length === 0) {
    return <p className="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>;
  } else {
    return citas.map((cita) => <CitaComponent key={cita.id} cita={cita} />);
  }
}
