import axios from 'axios';
import { Person, PersonFormData } from '../types/person';

// Utilise la variable d'environnement si disponible, sinon utilise l'URL par défaut
const API_URL = process.env.NEXT_PUBLIC_API_URL 
  ? `${process.env.NEXT_PUBLIC_API_URL}/persons` 
  : 'http://localhost:5001/persons';

console.log('API URL:', API_URL); // Pour déboguer l'URL de l'API

export const fetchPersons = async (): Promise<Person[]> => {
  try {
    const response = await axios.get(API_URL);
    console.log('API Response:', response.data); // Pour déboguer la réponse
    return response.data;
  } catch (error) {
    console.error('Error fetching persons:', error);
    throw error;
  }
};

export const fetchPerson = async (id: number): Promise<Person> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createPerson = async (personData: PersonFormData): Promise<Person> => {
  const response = await axios.post(API_URL, personData);
  return response.data;
};

export const updatePerson = async (id: number, personData: Partial<PersonFormData>): Promise<Person> => {
  const response = await axios.put(`${API_URL}/${id}`, personData);
  return response.data;
};

export const deletePerson = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
