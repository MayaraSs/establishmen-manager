import React, { createContext, useContext, useState, ReactNode } from 'react'

import api from '../services/api'

interface Props {
  children: ReactNode
}
export interface Establishment {
  id?: string
  name: string
  cnpj: string
  locale: string
}

interface EstablishmentContextData {
  getEstablishments: () => Promise<Array<Establishment>>
  establishments: Array<Establishment>
  add: (establishments: Establishment) => Promise<void>
  removeEstablishment: (id: string) => Promise<void>
}
const EstablishmentContext = createContext<EstablishmentContextData>(
  {} as EstablishmentContextData
)

export const EstablishmentProvider: React.FC<Props> = ({ children }: Props) => {
  const [establishments, setEstablishments] = useState<Array<Establishment>>([])

  const add = async (establishment: Establishment): Promise<void> => {
    await api.post('http://localhost:4000/establishment', establishment)
  }

  const removeEstablishment = async (id: string) => {
    await api.delete(`http://localhost:4000/establishment/${id}`)
  }

  const getEstablishments = async () => {
    const response = await api.get('http://localhost:4000/establishments')
    if (response.data[0] !== null) setEstablishments([...response.data])
    return response.data
  }

  return (
    <EstablishmentContext.Provider
      value={{
        add,
        removeEstablishment,
        getEstablishments,
        establishments,
      }}
    >
      {children}
    </EstablishmentContext.Provider>
  )
}

export function useEstablishment() {
  const context = useContext(EstablishmentContext)

  return context
}

export default EstablishmentContext
