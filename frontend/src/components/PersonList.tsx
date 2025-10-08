import React from 'react';
import { Person } from '../types/person';

interface PersonListProps {
  persons: Person[];
}

const PersonList: React.FC<PersonListProps> = ({ persons }) => {
  if (persons.length === 0) {
    return <p>No persons found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Age</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td className="py-2 px-4 border-b">{person.id}</td>
              <td className="py-2 px-4 border-b">{person.firstName}</td>
              <td className="py-2 px-4 border-b">{person.lastName}</td>
              <td className="py-2 px-4 border-b">{person.email}</td>
              <td className="py-2 px-4 border-b">{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonList;
