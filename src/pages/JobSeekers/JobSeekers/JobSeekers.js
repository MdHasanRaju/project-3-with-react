import React from 'react';
import Footer from '../../Shared/Footer/Footer'; 
import ScanApp from '../../Shared/ScanApp/ScanApp';
import JobSeekersAll from '../JobSeekersAll/JobSeekersAll'; 
import SeekersTestimonial from '../SeekersTestimonial/SeekersTestimonial';

const JobSeekers = () => {
    return (
        <div> 
            <JobSeekersAll/>
            <SeekersTestimonial/>
            {/* <ScanApp/> */}
            <Footer/>
        </div>
    );
};

export default JobSeekers;