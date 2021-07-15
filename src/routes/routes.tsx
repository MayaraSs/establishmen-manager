import React from 'react'

import { useAuth } from '../contexts/auth'
import SignRoutes from './loginRoutes'
import OtherRoutes from './other'

const Routes: React.FC = () => {
  const { signed } = useAuth()
  return signed ? <OtherRoutes /> : <SignRoutes />
}

export default Routes
