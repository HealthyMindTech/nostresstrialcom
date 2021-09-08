import React from 'react';
import { InfoSection, Testimonial } from '../../components';
import { homeObjOne, homeObjTwo, homeObjFour, homeObjFive, testObjOne} from './Data';

const Home = () => {
    return (
        <React.Fragment>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjFour} />
            <Testimonial {...testObjOne} />
            <InfoSection {...homeObjFive} />
        </React.Fragment>
    )
}

export default Home;