import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpeg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Haidarali</span></h4>
                <p className="paragraph">
                    I am a fullstack web developer who creates app using Django, React and Nodejs. I have MongoDB and Postgresql database under my belt. I build Web3.0 apps using Ethereum blockchain, write smart contracts in Solidity and write deployment scripts using Truffle and Brownie blockchain framework. I also have pretty much knowledge of golang and can build backend using gorilla mux or go fiber.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Haidarali Masu</p>
                        <p>: 19</p>
                        <p>: Indian </p>
                        <p>: English, Hindi, Gujrati </p>
                        <p>: Gujrat, India</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <a href="../resume/Haidarali.pdf"  download="Haidarali.pdf" target="blank"><PrimaryButton title={'Download Cv'} /></a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;

        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
