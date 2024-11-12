// components/RingCarousel.tsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Ring {
  id: string;
  nome: string;
  poder: string;
  portador: string;
  forjadorPor: string;
  imagem: string;
}

const RingCarousel: React.FC = () => {
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
    <div className="carousel">
      {rings.map((ring) => (
        <div  key={ring.id} className="carousel-item">
          <img src={ring.imagem} alt={ring.nome} />
          <h2 className='text-black' >{ring.nome}</h2>
          <p>Poder: {ring.poder}</p>
          <p>Portador: {ring.portador}</p>
          <p>Forjado por: {ring.forjadorPor}</p>
          <button onClick={() => deleteRing(ring.id)}>Deletar</button>
        </div>
      ))}
    </div>
  );
};

export default RingCarousel;
