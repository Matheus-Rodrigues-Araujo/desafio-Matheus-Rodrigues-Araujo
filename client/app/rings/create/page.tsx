'use client'
import React from 'react';
import RingForm from '@/components/ringForm';
import { useRouter } from 'next/navigation';

const CreateRing = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Criar Novo Anel</h1>
      <RingForm onSuccess={() => router.push('/')} />
    </div>
  );
};

export default CreateRing;
