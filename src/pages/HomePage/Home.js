import React from 'react';
import { InfoSection, Testimonial } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix, testObjOne} from './Data';

const Home = () => {
    return (
        <React.Fragment>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <InfoSection {...homeObjFive} />
            <Testimonial {...testObjOne} />
            <InfoSection {...homeObjSix} />
        </React.Fragment>
    )
}

export default Home;