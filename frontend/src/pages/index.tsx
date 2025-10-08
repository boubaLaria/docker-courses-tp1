import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import PersonList from '../components/PersonList'
import PersonForm from '../components/PersonForm'
import { Person } from '../types/person'
import { fetchPersons } from '../services/personService'

const Home: NextPage = () => {
  const [persons, setPersons] = useState<Person[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadPersons = async () => {
      try {
        const data = await fetchPersons()
        setPersons(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch persons:', error)
        setError('Failed to fetch persons. Please make sure the API is running.')
        setLoading(false)
      }
    }

    loadPersons()
  }, [])

  const handlePersonAdded = (newPerson: Person) => {
    setPersons([...persons, newPerson])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Persons App</title>
        <meta name="description" content="Application to manage persons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold mb-6 text-center">Persons Management</h1>
        
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6" role="alert">
          <p className="text-center font-bold">
            ⚠️ Important: Access this application at <a href="http://localhost:3000" className="underline">http://localhost:3000</a>
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Person</h2>
          <PersonForm onPersonAdded={handlePersonAdded} />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Persons List</h2>
          {loading ? (
            <p>Loading persons...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <PersonList persons={persons} />
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
