import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import { EstablishmentProvider } from '../contexts/establishment'
import AddCompany from '../pages/addCompany'

const OtherRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <EstablishmentProvider>
        <Route path="/" component={AddCompany} />
      </EstablishmentProvider>
      {/* <Route path="manager/0" component={ManagerEstablishmentInfo} /> */}
    </BrowserRouter>
  )
}

export default OtherRoutes
