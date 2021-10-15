import React from 'react'
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Particle from '../Components/Particle';
import {Helmet} from "react-helmet";

function HomePage() {
    return (
        <>

        <Helmet>
                <meta charSet="utf-8" />
                <title>Haidarali | Home</title>
        </Helmet>

        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Haidarali</span></h1>
                <p>
                   I am a fullstack webdeveloper and blockchain engineer who creates decentrailzed Web3.0 apps on ethereum blockchain using solidity. I also wite blogs on <a href="https://blog.kodinghandle.com" target="blank"><span>kodinghandle.com</span></a>
                </p>
                <div className="icons">
                    <a href="https://www.twitter.com/haidarali_masu" target="blank" className="icon i-twitter">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.github.com/Haidar1528" target="blank" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.instagram.com/haidarali_masu" target="blank" className="icon i-instagram">
                        <InstagramIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/haidaralimasu" target="blank" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
        </>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-twitter{
                &:hover{
                    border: 2px solid #1da1f2;
                    color: #1da1f2;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
            .i-instagram{
                &:hover{
                    border: 2px solid #8a3ab9;
                    color: #8a3ab9;
                }
            }
            .i-linkedin{
                &:hover{
                    border: 2px solid #00a0dc;
                    color: #00a0dc;
                }
            }
        }
    }
`;

export default HomePage;
