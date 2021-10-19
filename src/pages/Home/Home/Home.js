import React from 'react'
import Banner from '../Banner/Banner';
import Commitment from '../Commitment/Commitment';
import Faq from '../Faq/Faq';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div id="">
            <Banner />
            <Services />
            <Commitment />
            <Faq />
        </div>
    )
}

export default Home;