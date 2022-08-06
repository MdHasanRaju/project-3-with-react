import React from 'react';   
import Footer from '../../Shared/Footer/Footer'; 
import ScanApp from '../../Shared/ScanApp/ScanApp';
import Banner from '../Banner/Banner';
import HireChat from '../HireChat/HireChat';
import HomeTestimonial from '../HomeTestimonial/HomeTestimonial';
import JobAvailable from '../JobAvailable/JobAvailable';
import Startup from '../Startup/Startup';

const Home = () => {
    return (
        <div> 
            <Banner/> 
            <HireChat/>
            <JobAvailable/>
            <Startup/>
            <HomeTestimonial/>
            {/* <ScanApp/> */}
            <Footer/>
        </div>
    );
};

export default Home;