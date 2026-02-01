// src/components/AppointmentForm.tsx
"use client"; // This is required for forms in Next.js App Router

import { useState } from 'react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    rollNumber: '',
    email: '',
    concern: ''
  });
  
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Success! We will contact you shortly.');
        setFormData({ studentName: '', rollNumber: '', email: '', concern: '' }); // Reset form
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Error submitting form.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-md w-full mx-auto">
      <h3 className="text-2xl font-bold text-blue-900 mb-6">Request Support</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" 
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Vinayak Goyal"
            value={formData.studentName}
            onChange={(e) => setFormData({...formData, studentName: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number</label>
          <input 
            type="text" 
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="2101CS..."
            value={formData.rollNumber}
            onChange={(e) => setFormData({...formData, rollNumber: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">IITP Email</label>
          <input 
            type="email" 
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="name_roll@iitp.ac.in"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
          <textarea 
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32"
            placeholder="Briefly describe your concern..."
            value={formData.concern}
            onChange={(e) => setFormData({...formData, concern: e.target.value})}
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Request
        </button>

        {status && <p className="text-center text-sm font-medium mt-4 text-blue-800">{status}</p>}
      </form>
    </div>
  );
}