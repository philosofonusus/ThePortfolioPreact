import React from 'preact/compat'
import CarouselItem from "./CarouselItem";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useWindowSize } from "../hooks/windowSize.hook";

import {proj1, proj2, proj3, proj4, proj7, proj6, proj8, proj9} from './Imgs'
import proj5 from '../assets/images/TheCocktailDb.jpg'

const Carouseler = () => {
    const [width] = useWindowSize()
    const items = [
        {title: 'Tentacles Portfolio', description: 'This is my current portfolio.  It is fully written with react js with some old bootstrap which i like', href: 'https://my-tentacles-are-in-you.netlify.app/', number: '001/009', img: proj1},
        {title: 'Spotify Clone', description: 'It is the replica of basic spotify\'s functionality. I have used spotify api and react js with some basic concepts of Redux.', href: 'https://github.com/philosofonusus/spotify-clone', number: '002/009', img: proj2},
        {title: 'Swedish Museum', description: 'This is web app of Swedish Museum(wp twenty-twenty theme) written in nextJs.', number: '003/009', img: proj3, href: '#'},
        {title: 'Wortex Polland', description: 'Freelance project. Only layout, so there is no link.', number: "004/009", img: proj7, href: "#" },
        {title: 'TicTacToe', description: 'Simple TicTacToe app. TypeScript + Redux + ReactJs.', number: '005/009', href: 'https://github.com/philosofonusus/TicTacToe', img: proj4},
        {title: 'TheCocktailDb', description: 'This is TheCocktailDb MERN fullstack project.', href: 'https://github.com/philosofonusus/TheCocktailDB', number: '006/009', img: proj5},
        {title: 'Pandora Alarm', description: 'This is my Freelance project. Redux + Reactjs. ', href: 'https://pandora-alarm.am', number: '007/009', img: proj6},
        {title: 'Hermes Paris A&S', description: 'This is my Freelance project. Only Layout', href: '#', number: '008/009', img: proj8},
        {title: "TENTAI", description: 'The fastest video platform. In development process', number: '009/009', img: proj9, href: 'https://tentai.herokuapp.com/'}
    ]
    return (
        <>
            <div className="col-md-12 col-xs-12 carousel slide projects-carousel">
                { width > 655 ?
                    <Carousel
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button type="button" className="right carousel-control" onClick={onClickHandler} title={label} style={{ zIndex: '1',position: "absolute", right: '0',backgroundColor: 'black' }}>
                                    ???
                                </button>
                            )
                        }
                        renderArrowPrev={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button type="button" className="left carousel-control" onClick={onClickHandler} title={label} style={{ zIndex: '1',position: "absolute", left: '0',backgroundColor: 'black' }}>
                                    ???
                                </button>
                            )
                        }
                              autoPlay infiniteLoop showArrows showThumbs={false}
                              stopOnHover swipeable showStatus={false}
                              centerMode centerSlidePercentage={34.3}
                              transitionTime={600}>
                        {
                            items.map(el => {
                            return <CarouselItem key={el.number} href={el.href} title={el.title} description={el.description} number={el.number} img={el.img}/>
                        })
                        }
                    </Carousel>
                    :
                    <div>
                        {
                            items.map(el => {
                            return <CarouselItem key={el.number} href={el.href} title={el.title} description={el.description} number={el.number} img={el.img}/>
                        })
                        }
                    </div>
                }

            </div>
        </>
    )
}
export default Carouseler
