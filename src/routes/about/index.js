import React from 'preact/compat'
import Footer from "../../Components/Footer";
import {Helmet} from "react-helmet";

import rose from '../../assets/images/rose.jpg'
import {useWindowSize} from "../../hooks/windowSize.hook";
import {Link} from "react-router-dom";

const AboutPage = () => {
    const [width] = useWindowSize()
    return(
        <>
            <Helmet>
                <title>About me</title>
            </Helmet>

            <div className="section-container">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">

                            <div className="section-container-spacer text-center">
                                <h1 className="h2">01 : About me</h1>
                            </div>

                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <div className="row">
                                        <div className="col-xs-12 col-md-6">
                                            <h3>
                                                Who am I
                                            </h3>
                                            <p>
                                                Hello, I'm Tentacle. Currently, my specialization is web development, but
                                                I'm trying myself in all directions of development. I'm the type of person who likes when all the stuff I do is perfect.
                                                I like to code interesting projects and learn new stuff in my free time.
                                            </p>
                                            <h3>
                                                What I can offer you
                                            </h3>
                                            <p>
                                                I can offer you website or webapp you want. I'm focusing on the site performance,
                                                SEO and web design. I like to do things fast and well. If you are interested, you can <Link to='/contact' style={{color: 'black', textDecoration: 'underline', fontWeight: 600}}>contact me</Link>.
                                            </p>
                                            <h3>
                                                About my skills
                                            </h3>
                                            <p>
                                                For a layout, I use pure HTML and emmet. For styling, I use CSS with SASS preprocessor, maybe tailwindcss framework for fast coding.
                                                For a frontend, I use React, but mostly a lightweight version - Preact.
                                                When I want to do something fast, have a good SEO and performance then I use nextJS or Preact which i love a lot.
                                                For state management, I use Redux (which I hate a lot) or Jotai, maybe ReactContext API.
                                                When I need DB, I use MongoDB or if I need SQL DB I use Postgres.
                                                For a backend, I prefer to use Fastify or Express wrapped up with NestJs.
                                                I love TypeScript.
                                                I know how to work with webpack and gulp. When I need containerization I work with docker,
                                                docker-compose, and docker hub. In the development process, I'm trying to follow SOLID and KISS principles.
                                                I prefer TDD over BDD. For TDD I prefer Enzyme and JEST.
                                            </p>
                                        </div>
                                        <div style={width < 992 ? {justifyContent: 'center', display: 'flex', marginTop: '40px'} :{paddingLeft: '10vw'}} className="col-xs-12 col-md-6">
                                            <img src={rose} alt="rose" height={700} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginBottom: '15px'}}>
                <Footer />
            </div>
        </>
    )
}
export default AboutPage
