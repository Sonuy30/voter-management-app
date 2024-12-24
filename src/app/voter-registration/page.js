'use client';

import { useState } from 'react';

export default function VoterRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    aadharCard: '',
    panCard: '',
    rationCard: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/voters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    alert(result.message);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border" />
      <input name="dob" type="date" onChange={handleChange} className="w-full p-2 border" />
      <input name="aadharCard" placeholder="Aadhar Card" onChange={handleChange} className="w-full p-2 border" />
      <input name="panCard" placeholder="PAN Card" onChange={handleChange} className="w-full p-2 border" />
      <input name="rationCard" placeholder="Ration Card" onChange={handleChange} className="w-full p-2 border" />
      <textarea name="address" placeholder="Address" onChange={handleChange} className="w-full p-2 border" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Submit</button>
    </form>
  );
}