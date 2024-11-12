'use client'
import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Ring {
    id: string;
    nome: string;
    poder: string;
    portador: string;
    forjadoPor: string;
    imagem: string;
}

const RingList: React.FC = () => {
  const [rings, setRings] = useState<Ring[]>([]);

  const fetchRings = async () => {
    try {
      const response = await api.get('/rings');
      setRings(response.data);
    } catch (error) {
      console.error('Erro ao carregar os anéis:', error);
    }
  };

  const deleteRing = async (id: string) => {
    try {
      await api.delete(`/rings/${id}`);
      fetchRings();
    } catch (error) {
      console.error('Erro ao deletar o anel:', error);
    }
  };

  useEffect(() => {
    fetchRings();
  }, []);

  return (
<div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Lista de Anéis</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rings.map((ring) => (
          <div key={ring.id} className="border text-black rounded-lg p-4 bg-gray-50 shadow-lg">
            <img src={ring.imagem} alt={ring.nome} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl text-black font-semibold">{ring.nome}</h3>
            <p className="text-sm">Poder: {ring.poder}</p>
            <p className="text-sm">Portador: {ring.portador}</p>
            <p className="text-sm">Forjado por: {ring.forjadoPor}</p>
            <button
              onClick={() => deleteRing(ring.id!)}
              className="mt-4 w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Deletar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RingList;
