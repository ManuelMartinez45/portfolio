import * as React from 'react'
import * as Styles from './Main.module.scss'
import { Link } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css'
function Main(){
    return (
        <>
        <section id={Styles.homeProjectSection}>
            <div id={Styles.technologies}>
                    <Link className={Styles.projectLink} to='#'>
                        <h4>
                            <b>Technologies</b>    
                            <hr />
                        </h4>
                            <p id={Styles.iconSection}>
                                <img className={Styles.mongoIcon} src="" alt="MongoDB Icon" />

                                <img className={Styles.postgresIcon} src="" alt="PostgreSQL Icon" />
                                
                                <img className={Styles.nodeIcon} src="" alt="Node.js Icon" />
                                
                                <img className={Styles.javascriptIcon} src="" alt="Javascript Icon" />

                               <img className={Styles.pythonIcon} src="" alt="Python Icon" />

                                <img src="" alt="CSS3 Icon" className={Styles.cssIcon} />

                                <img src="" alt="HTML5 Icon" className={Styles.htmlIcon} />
                                
                                <img src="" alt="React.js Icon" className={Styles.reactIcon} />

                                <img src="" alt="Django" className={Styles.djangoIcon} />
                            </p>
                    </Link>
                </div>
                <div id={Styles.destinationNYC}>
                    <Link className={Styles.projectLink} to="https://destination-nyc.herokuapp.com/" target="_blank">
                        <h4>
                            <b>DestinationNYC</b>
                            <hr />
                        </h4>
                        <p className={Styles.projectAbout}>
                                A travel guide app, built utilizing the Google Maps API. As a user, they can navigate the website to each individual borough. From there they can choose from the neighborhoods in each borough, which will then list all the available points of interests in the area. Users can create accounts, allowing them ability to leave reviews on points of interest, and create their own itineraries.
                                <br />
                                <span id={Styles.projectIconSection}>
                                    <img className={Styles.pythonIcon} src="" alt="Python Icon" />
                                    <img className={Styles.postgresIcon} src="" alt="PostgreSQL Icon" />
                                    <img src="" alt="Django" className={Styles.djangoIcon} />
                                    <img className={Styles.javascriptIcon} src="" alt="Javascript Icon" />
                                    <img src="" alt="CSS3 Icon" className={Styles.cssIcon} />
                                    <img src="" alt="HTML5 Icon" className={Styles.htmlIcon} />
                                </span>
                            </p>
                    </Link>
                </div>
                
                <div id={Styles.mockX}>
                    <Link className={Styles.projectLink} to='https://mock-x.herokuapp.com/' target="_blank">
                        <h4>
                            <b>MockX</b>
                            <hr />
                        </h4>
                        <p className={Styles.projectAbout}>
                                A Mock e-commerce website based on Stock-X. Users can view an array of sneakers. Which will navigate users to a detail page, to gain more information. User's can "Buy" sneakers until the stock amount runs out. Users can navigate through breadcrumbs, or the search feature to display all items in relative brand or type. 
                                <br />
                                <span id={Styles.projectIconSection}>
                                    <img className={Styles.nodeIcon} src="" alt="Node.js Icon" />
                                    <img className={Styles.mongoIcon} src="" alt="MongoDB Icon" />
                                    <img className={Styles.javascriptIcon} src="" alt="Javascript Icon" />
                                    <img src="" alt="CSS3 Icon" className={Styles.cssIcon} />
                                    <img src="" alt="HTML5 Icon" className={Styles.htmlIcon} />
                                </span>
                            </p>

                    </Link>
                </div>
                <div id={Styles.wayte}>
                    <Link className={Styles.projectLink} to="https://wayte.netlify.app/" target="_blank">
                        <h4>
                            <b>Wayte</b>
                            <hr />
                        </h4>
                            <p className={Styles.projectAbout}>
                                A exercise app that allows users to explore multiple exercises. As a user, they can log in/log out, view a variety of exercises, view exercises based on each primary muscle group. If logged in, the user is able to create a personalized workout.
                                <br />
                                <span id={Styles.projectIconSection}>
                                    <img src="" alt="React.js Icon" className={Styles.reactIcon} />
                                    <img className={Styles.nodeIcon} src="" alt="Node.js Icon" />
                                    <img className={Styles.mongoIcon} src="" alt="MongoDB Icon" />
                                    <img className={Styles.javascriptIcon} src="" alt="Javascript Icon" />
                                    <img src="" alt="CSS3 Icon" className={Styles.cssIcon} />
                                    <img src="" alt="HTML5 Icon" className={Styles.htmlIcon} />
                                </span>
                            </p>
                    </Link>
                </div>
                
                
        </section>
        </>
    )
}

export default Main