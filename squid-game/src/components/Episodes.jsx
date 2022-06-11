import React from 'react'
import styled from "styled-components"

import {blue,pink,backgroundColor} from "../utils/colors"

import Episode1 from "../assets/hero.jpg"
import Episode2 from "../assets/sqqq.jpg"
import Episode3 from "../assets/SQUIDGAMEHERO.jpg"

import TitlePNG from "../assets/1.jpeg"

function Episodes() {

    const episodesData = [
        {
            episodeName : "1. Red Light, Green Light",
            episodeInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eligendi minima blanditiis quia esse quas ea autem officiis iure assumenda quaerat illo obcaecati quibusdam veniam libero! Architecto illum aut error!",
            episodeImage : Episode1,
        },
        {
            episodeName : "2. Hell",
            episodeInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eligendi minima blanditiis quia esse quas ea autem officiis iure assumenda quaerat illo obcaecati quibusdam veniam libero! Architecto illum aut error!",
            episodeImage : Episode2,
        },
        {
            episodeName : "3. The Man with the Umbrella",
            episodeInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eligendi minima blanditiis quia esse quas ea autem officiis iure assumenda quaerat illo obcaecati quibusdam veniam libero! Architecto illum aut error!",
            episodeImage : Episode3,
        },
        {
            episodeName : "4. Stick to the Team",
            episodeInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eligendi minima blanditiis quia esse quas ea autem officiis iure assumenda quaerat illo obcaecati quibusdam veniam libero! Architecto illum aut error!",
            episodeImage : Episode1,
        },
        {
            episodeName : "5. A Fair World",
            episodeInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eligendi minima blanditiis quia esse quas ea autem officiis iure assumenda quaerat illo obcaecati quibusdam veniam libero! Architecto illum aut error!",
            episodeImage : Episode2,
        },
        {
            episodeName : "6. Gganbu",
            episodeInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eligendi minima blanditiis quia esse quas ea autem officiis iure assumenda quaerat illo obcaecati quibusdam veniam libero! Architecto illum aut error!",
            episodeImage : Episode3,
        },
        {
            episodeName : "7. VIPS",
            episodeInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eligendi minima blanditiis quia esse quas ea autem officiis iure assumenda quaerat illo obcaecati quibusdam veniam libero! Architecto illum aut error!",
            episodeImage : Episode1,
        },
        {
            episodeName : "8. Front Man",
            episodeInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eligendi minima blanditiis quia esse quas ea autem officiis iure assumenda quaerat illo obcaecati quibusdam veniam libero! Architecto illum aut error!",
            episodeImage : Episode2,
        },
        {
            episodeName : "9. One Lucky Day",
            episodeInfo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eligendi minima blanditiis quia esse quas ea autem officiis iure assumenda quaerat illo obcaecati quibusdam veniam libero! Architecto illum aut error!",
            episodeImage : Episode3,
        },
    ]

    const getEpisodesMarkdown = (data,number) => {
        return(
            <div className={`episode episode-${number}`}>
                <div className="image">
                    <img src={data.episodeImage} alt="" />
                </div>
                <h3>{data.episodeName}</h3>
                <p>{data.episodeInfo}</p>
            </div>
        )
    }
    
    return (
        <Section id = "episodes" className = "defaultMargin">

            <div className="title">
                <div className="image">
                    
                <img src= {TitlePNG} alt="" />
                </div>
                <div className="circle"></div>
            </div>

            <div className="episodes">
                <div className="episodes__grid">
                    {getEpisodesMarkdown(episodesData[0] , 1)}
                    {getEpisodesMarkdown(episodesData[1] , 2)}
                    {getEpisodesMarkdown(episodesData[2] , 3)}
                </div>
                <div className="episodes__grid">
                    <div className="square">
                    </div>
                    {getEpisodesMarkdown(episodesData[3] , 4)}
                    {getEpisodesMarkdown(episodesData[4] , 5)}
                </div>
                <div className="episodes__grid">
                {getEpisodesMarkdown(episodesData[5] , 6)}
                {getEpisodesMarkdown(episodesData[6] , 7)}
                <div className="square"></div>
                </div>
                <div className="episodes__grid">
                {getEpisodesMarkdown(episodesData[7] , 8)}
                <div></div>
                {getEpisodesMarkdown(episodesData[8] , 9)}
                </div>
            </div>
        </Section>
  )
}

const Section = styled.section`

margin: 0 5vw;
.title{
    display:flex;
    justify-content:center;
    align-items:center;
    margin:10vh;
    position:relative;

    .image{
        max-height:25rem;
        max-width:25rem;
        overflow:hidden;
        img{
            height:25rem;
            width:25rem;
            object-fit:cover;
        }
    }

    .circle{
        height:8rem;
        width:8rem;
        border:10px solid ${pink};
        right:10%;
        border-radius:10rem;
        position:absolute;
    }
}

.episodes{
    display:flex;
    flex-direction:column;
    gap:8rem;
    
    &__grid{
        display:grid;
        grid-template-columns: repeat(3,1fr);
        gap:5rem;
        color:white;

        .square{
            height:8rem;
            width:8rem;
            border:10px solid ${pink};
            margin-left:3rem;
            margin-top:10rem;
        }

        .episode{
            display:flex;
            justify-content:center;
            align-items:flex-start;
            flex-direction:column;
            gap:2rem;   
            h3{
                letter-spacing:0.1rem;
            }
            p{
                color:#c0c0c0;
                font-weight:300;
                letter-spacing:0.05rem;
                text-align:justify;
            }

            .image{
                max-height:15rem;
                overflow:hidden;
                img{
                    height:15rem;
                    transition:0.4s ease-in-out;
                    &:hover{
                        transform:scale(1.2);
                    }
                }
            }
            &-2,
            &-4,
            &-6 {
                .image{
                    max-height:25rem;
                    max-width:25rem;
                    overflow:hidden;
                    img{
                        height:25rem;
                        width:25rem;
                        object-fit:cover;
                    }
                }
            }
        }
    }
}

`

export default Episodes