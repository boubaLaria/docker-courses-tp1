import React, { useState } from 'react';
import { Person, PersonFormData } from '../types/person';
import { createPerson } from '../services/personService';

interface PersonFormProps {
  onPersonAdded: (person: Person) => void;
}

const PersonForm: React.FC<PersonFormProps> = ({ onPersonAdded }) => {
  const [formData, setFormData] = useState<PersonFormData>({
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'age' ? parseInt(value) || 0 : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError('All fields are required');
      return;
    }
    
    try {
      const newPerson = await createPerson(formData);
      onPersonAdded(newPerson);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        age: 0,
      });
      setError('');
    } catch (err) {
      setError('Failed to add person');
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Person
        </button>
      </form>
    </div>
  );
};

export default PersonForm;
