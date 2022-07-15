import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ScanApp from '../../Shared/ScanApp/ScanApp';
import FeaturesAll from '../FeaturesAll/FeaturesAll';

const Features = () => {
    return (
        <div>
            <FeaturesAll/>
            <ScanApp/>
            <Footer/>
        </div>
    );
};

export default Features;