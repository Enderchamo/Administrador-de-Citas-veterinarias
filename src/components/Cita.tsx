import type { Cita as CitaType } from "../types";

type CitaProps = {
  cita: CitaType;
  eliminarCita: ((id: string) => void);
  setCitaEditar: React.Dispatch<React.SetStateAction<CitaType | null>>
};

export default function Cita({ cita, eliminarCita, setCitaEditar}: CitaProps) {
  const { id ,nombre, propietario, email, fecha, sintomas } = cita;


  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Paciente: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={()=>setCitaEditar(cita)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={()=>eliminarCita(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}


