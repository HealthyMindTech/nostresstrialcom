import React from 'react';
import { InfoSection } from '../../components';
import { contactObjOne } from './Data';

function Contact() {
  return (
    <React.Fragment>
      <InfoSection {...contactObjOne} />
    </React.Fragment>
  );
}

export default Contact;