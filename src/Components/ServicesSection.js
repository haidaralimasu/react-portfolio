import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        
                        title={'Web Development'} 
                        paragraph={'I can create your web idea into reality using my skills in django and react or MERN stack'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            
                            title={'Blockchain Development'} 
                            paragraph={'I can create smart contracts and make a web GUI to intreact with it using popular blockchain framework Truffle or Brownie.'}
                        />
                    </div>
                    <ServiceCard 
                        
                        title={'Go Lang'} 
                        paragraph={'I can create your next project using go-lang a next gen language rather it is backend or desktop app.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
