import React, { useState } from 'react';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });
  console.log('render!')

  return (
    <>
      <div>
        FirstName:
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        LastName:
        <input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <button onClick={() => console.log(`${firstName} ${lastName}`)}>See state</button>
      </div>
      <div>
        FirstName:
        <input value={formData.firstName} onChange={(e) => setFormData({
          ...formData,
          firstName: e.target.value
        })} />
        LastName:
        <input value={formData.lastName} onChange={(e) => setFormData({
          ...formData,
          lastName: e.target.value
        })}/>
        <button onClick={() => console.log(`${formData.firstName} ${formData.lastName}`)}>See state</button>
      </div>
    </>
  );
}
