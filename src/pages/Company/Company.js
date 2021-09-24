import React from 'react';
import { InfoSection } from '../../components';
import { companyObjOne} from './Data';

const Company = () => {
    return (
        <React.Fragment>
            <InfoSection {...companyObjOne} />
        </React.Fragment>
    )
}

export default Company;