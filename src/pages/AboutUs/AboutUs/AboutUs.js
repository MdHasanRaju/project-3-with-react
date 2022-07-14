import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ScanApp from '../../Shared/ScanApp/ScanApp';
import AboutDetails from '../AboutDetails/AboutDetails';

const AboutUs = () => {
    return (
        <div>
            <AboutDetails/>
            <ScanApp/>
            <Footer/>
        </div>
    );
};

export default AboutUs;