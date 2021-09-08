import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne } from './Data';

function Login() {
  return (
    <React.Fragment>
      <InfoSection {...homeObjOne} />
    </React.Fragment>
  );
}

export default Login;