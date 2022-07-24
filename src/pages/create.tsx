import React, { useState } from 'react';
import { trpc } from '../utils/trpc';

const Create = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const create = trpc.useMutation('participants.createParticipant');

  return (
    <div>
      <input
        className='h-11 w-36'
        onChange={(e) => setFullName(e.target.value)}
        type='text'
      />
      <input
        className='h-11 w-36'
        onChange={(e) => setEmail(e.target.value)}
        type='text'
      />

      <button onClick={() => create.mutateAsync({ email, fullName })}>
        asda
      </button>
    </div>
  );
};

export default Create;
