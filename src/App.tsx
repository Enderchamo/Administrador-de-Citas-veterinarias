import  Formulario  from "./components/Formulario";


function App() {
  return (
    <main className="bg-gray-100 min-h-screen" style={{ paddingTop: "80px" }}>
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
        Seguimiento Pacientes {" "}
        <span className="text-indigo-700">Veterinaria</span>
      </h1>

      <div className="mt-12 md:flex container mx-auto ">
        <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-3xl text-center">
            Seguimiento Pacientes
          </h2>

          <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {" "}
            <span className="text-indigo-600 font-bold">Administralos</span>
          </p>

          <Formulario/>
          
        </div>

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {" "}
            <span className="text-indigo-600 font-bold ">
              Pacientes y Citas
            </span>
          </p>
          <div id="citas">
            <p className="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
