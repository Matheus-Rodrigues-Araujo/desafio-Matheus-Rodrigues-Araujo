// components/RingForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../services/api';

interface RingProps {
    id: string;
    nome: string;
    poder: string;
    portador: string;
    forjadoPor: string;
    imagem: string;
  }
interface RingFormProps {
  defaultValues?:  RingProps;
  onSuccess: () => void;
}

const RingForm: React.FC<RingFormProps> = ({ defaultValues, onSuccess }) => {
    const { register, handleSubmit, reset } = useForm<RingProps>({
      defaultValues: defaultValues || {
        nome: '',
        poder: '',
        portador: '',
        forjadoPor: '',
        imagem: '',
      },
    });

  const onSubmit = async (data: unknown) => {
    try {
      if (defaultValues?.id) {
        await api.put(`/rings/${defaultValues.id}`, data);
      } else {
        await api.post('/rings', data);
      }
      reset();
      onSuccess();
    } catch (error) {
      console.error('ERRO no salvamento do anel:', error);
    }
  };

  return (
<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white rounded-md shadow-md">
      <input
        {...register('nome', { required: true })}
        placeholder="Nome do Anel"
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <input
        {...register('poder', { required: true })}
        placeholder="Poder"
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <input
        {...register('portador', { required: true })}
        placeholder="Portador"
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <input
        {...register('forjadoPor', { required: true })}
        placeholder="Forjado Por"
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <input
        {...register('imagem', { required: true })}
        placeholder="URL da Imagem"
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
        Salvar
      </button>
    </form>
  );
};

export default RingForm;
