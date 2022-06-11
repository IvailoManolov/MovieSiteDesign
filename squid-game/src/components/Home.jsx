import React from 'react'
import styled from "styled-components"

// HeroImage
import HeroImage from "../assets/hero.jpg"
// SQUID 
import Squid from "../assets/sqqq.jpg"
// GAME
import Game from "../assets/SQUIDGAMEHERO.jpg"
// Colors
import { backgroundColor } from "../utils/colors"

const Section = styled.section`
    display:grid;
    grid-template-columns : 40% 60%;
    .navbar{
        margin: 3rem 0 0 4rem;
        display:flex;
        flex-direction : column;
        gap : 4rem;
        .brand{
            display:flex;
            align-items:center;
            gap:1rem;
            cursor:pointer;
            &:hover{
                .circle,
                .square{
                    border-color: white;
                }
                .triangle{
                    border-bottom-color:white;
                }
            }
            .circle{
                height:3rem;
                width: 3rem;
                border: 5px solid #f72585;
                border-radius:2rem;
                transition : 0.5s ease-in-out;
            }
            .triangle{
                border-left:2rem solid transparent;
                border-right : 2rem solid transparent;
                border-bottom : 3.4rem solid #f72585;
                display:flex;
                justify-content:center;
                align-items:center;
                transition:0.5s ease-in-out;
                position:relative;
                .inner{
                    border-left: 1.5rem solid transparent;
                    border-right : 1.5rem solid transparent;
                    border-bottom : 2.8rem solid ${backgroundColor};
                    position:absolute;
                    top:0.4rem;
                }
            }
            .square{
                height:3rem;
                width: 3rem;
                border: 5px solid #f72585;
                transition : 0.5s ease-in-out;
            }
        }
        .links{
            list-style-type:none;
            display:flex;
            flex-direction:column;
            gap:2rem;
            li{
                a{
                    text-decoration:none;
                    color:#8f8f8f;
                    text-transform:uppercase;
                    font-size:2rem;
                    letter-spacing:0.2rem;  
                    &:hover{
                        color:white;
                    }
                }
                &:first-of-type{
                    color:white;
                }
            }
        }
    }
    .image{
        position:relative;
        img{
            width:100%;
            height:100%;
            object-fit:c;
        }
        .title{
            position:absolute;
            bottom:10px;
            left:-5rem;
            z-index:10;

            img{
                width:45vh;
                object-fit:cover;
                &:nth-of-type(1){
                    position:absolute;
                    right:9vw;
                    bottom:6vw;
                }
            }
        }
    }
`

function Home() {
  return (
      <Section id = "home">
          <div className="navbar">
              <div className="brand">
                  <div className="circle"></div>
                  <div className="triangle">
                      <div className="inner"></div>
                  </div>
                  <div className="square"></div>
              </div>
              <ul className="links">
                  <li><a href="#info">Information</a></li>
                  
                  <li><a href="#episodes">Episodes</a></li>
                  
                  <li><a href="#videos">Videos</a></li>
                  
                  <li><a href="#details">Details</a></li>
              </ul>
          </div>
          <div className="image">
              <img src={Game} alt="" />
              <div className="title">
                  <img src={Squid} alt="" />
                  
                  <img src={Game} alt="" />
              </div>
          </div>
      </Section>
  )
}


export default Home