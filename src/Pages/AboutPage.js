import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSetion';
import {Helmet} from "react-helmet";

function AboutPage() {
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Haidarali | About</title>
        </Helmet>

        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSection />
            </AboutStyled >
        </MainLayout>
        </>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
