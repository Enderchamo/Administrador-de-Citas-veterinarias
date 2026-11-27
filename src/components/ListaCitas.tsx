import type { Cita } from "../types";
import CitaComponent from "./Cita";

type ListaCitasProps = {
  citas: Cita[];
  handleEliminarCita: (id: string) => void;
  setCitaEditar: React.Dispatch<React.SetStateAction<Cita | null>>
};

export default function ListaCitas({ citas, handleEliminarCita, setCitaEditar}: ListaCitasProps) {
  return <div id="citas">{mostrarCitas(citas,handleEliminarCita,setCitaEditar)}</div>; //Llamo la funcion para renderisar las citas.
}


//Funcion de renderizado
function mostrarCitas(citas: Cita[],handleEliminarCita: (id: string) => void,setCitaEditar: React.Dispatch<React.SetStateAction<Cita | null>>) {
  if (citas.length === 0) {
    return <p className="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>;
  } else {
    return citas.map((cita) => <CitaComponent key={cita.id} cita={cita} handleEliminarCita={handleEliminarCita} setCitaEditar={setCitaEditar} />);
  }
}
