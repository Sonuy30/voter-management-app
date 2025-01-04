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

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.dob) formErrors.dob = 'Date of Birth is required';
    if (!formData.aadharCard) formErrors.aadharCard = 'Aadhar Card is required';
    if (!formData.panCard) formErrors.panCard = 'PAN Card is required';
    if (!formData.rationCard) formErrors.rationCard = 'Ration Card is required';
    if (!formData.address) formErrors.address = 'Address is required';
    
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const res = await fetch('/api/voters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      alert(result.message);
      setFormData({
        name: '',
        dob: '',
        aadharCard: '',
        panCard: '',
        rationCard: '',
        address: '',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">Register Voter</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter full name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          
          {/* Date of Birth Input */}
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>

          {/* Aadhar Card Input */}
          <div>
            <label htmlFor="aadharCard" className="block text-sm font-medium text-gray-700">Aadhar Card Number</label>
            <input
              id="aadharCard"
              name="aadharCard"
              type="text"
              value={formData.aadharCard}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Aadhar Card Number"
            />
            {errors.aadharCard && <p className="text-red-500 text-sm">{errors.aadharCard}</p>}
          </div>

          {/* PAN Card Input */}
          <div>
            <label htmlFor="panCard" className="block text-sm font-medium text-gray-700">PAN Card Number</label>
            <input
              id="panCard"
              name="panCard"
              type="text"
              value={formData.panCard}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter PAN Card Number"
            />
            {errors.panCard && <p className="text-red-500 text-sm">{errors.panCard}</p>}
          </div>

          {/* Ration Card Input */}
          <div>
            <label htmlFor="rationCard" className="block text-sm font-medium text-gray-700">Ration Card Number</label>
            <input
              id="rationCard"
              name="rationCard"
              type="text"
              value={formData.rationCard}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Ration Card Number"
            />
            {errors.rationCard && <p className="text-red-500 text-sm">{errors.rationCard}</p>}
          </div>

          {/* Address Input */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter full address"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Register Voter
          </button>
        </form>
      </div>
    </div>
  );
}
