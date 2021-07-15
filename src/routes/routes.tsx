import React from 'react';

import SignRoutes from './loginRoutes';
import OtherRoutes from './other';
import { useAuth } from '../contexts/auth';

const Routes: React.FC = () => {
  const { signed } = useAuth();
  console.log(signed)
  return signed ? <OtherRoutes /> : <SignRoutes />;

};

export default Routes;