'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RingForm from '@/components/ringForm';
import api from '@/services/api';

const EditRing: React.FC = () => {
  const [ring, setRing] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      api.get(`/rings/${id}`).then((response) => setRing(response.data));
    }
  }, [id]);

  return (
    <div>
      <h1>Editar Anel</h1>
      {ring && <RingForm defaultValues={ring} onSuccess={() => router.push('/')} />}
    </div>
  );
};

export default EditRing;
