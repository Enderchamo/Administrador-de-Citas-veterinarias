import { useFormulario } from "../hooks/useFormulario";
import type { DatosFormulario } from "../types";

type FormularioProps = {
  agregarCita: (datos: DatosFormulario) => void;
};

export default function Formulario({agregarCita}:FormularioProps) {

  const { datos, setDatos, limpiarFormulario, handleChange } = useFormulario();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    //fUNCION PARA MANEJAR LO QUE VA A PASAR AL TOCAR EL BOTON DE SUMMIT.
    e.preventDefault();
    agregarCita(datos);
    console.log(datos);
  };

  return (
    <>
      <form
        id="formulario-cita"
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="paciente"
            className="block text-gray-700 uppercase font-bold text-sm"
          >
            Nombre Paciente:
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            id="paciente"
            placeholder="Nombre Paciente"
            name="paciente"
            value={datos.nombre}
            onChange={(e) => {
              setDatos({ ...datos, nombre: e.target.value });
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold text-sm"
          >
            Nombre Propietario:
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            id="propietario"
            placeholder="Nombre Propietario"
            name="propietario"
            value={datos.propietario}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold text-sm"
          >
            Email Contacto
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            id="email"
            placeholder="E-mail Contacto"
            name="email"
            value={datos.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold text-sm"
          >
            Fecha Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            id="fecha"
            name="fecha"
            value={datos.fecha}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold text-sm"
          >
            Síntomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            name="sintomas"
            placeholder="Síntomas del Paciente"
            value={datos.sintomas}
            onChange={handleChange}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-green-600 w-full p-3 text-white uppercase font-bold hover:bg-green-700 cursor-pointer transition-colors"
          value="Registrar Paciente"
        />
      </form>
    </>
  );
}
