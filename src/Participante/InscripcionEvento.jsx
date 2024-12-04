import React, { useState } from "react";
import PartHeader from "../Components/PartHeader";

const InscripcionEvento = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [eventos] = useState([
    { id: 1, nombre: "Evento 1", participantes: 50, organizador: "Organizador 1" },
    { id: 2, nombre: "Evento 2", participantes: 30, organizador: "Organizador 2" },
    { id: 3, nombre: "Evento 3", participantes: 20, organizador: "Organizador 3" },
  ]);

  const handleInscribirse = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 500);
  };


  return (
    <div className="bg-red-100 min-h-screen">
      {/* Header */}
     
     <PartHeader/>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="mt-6 text-2xl font-semibold text-red-600 mb-10">EVENTOS DISPONIBLES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventos.map((evento) => (
            <div key={evento.id} className="bg-white p-10 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">{evento.nombre}</h3>
              <p className="text-sm">Número de participantes: {evento.participantes}</p>
              <p className="text-sm">Organizador: {evento.organizador}</p>
              <button
                onClick={handleInscribirse}
                className="ml-12 mt-6 bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-gray-100"
              >
                Inscribirse
              </button>
            </div>
          ))}
        </div>
      </div>

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h3 className="text-lg font-bold text-red-500">¡Inscrito con éxito!</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default InscripcionEvento;
