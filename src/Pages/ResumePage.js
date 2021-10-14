import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';
import {Helmet} from "react-helmet";

function ResumePage() {
    return (
    	<>
    	<Helmet>
                <meta charSet="utf-8" />
                <title>Haidarali | Resume</title>
        </Helmet>
        <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>
        </>
    )
}

export default ResumePage
