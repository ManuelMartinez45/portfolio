import * as React from 'react'
import * as Styles from './Main.module.scss'
import { Link } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css'
function Main(){
    return (
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
                    </Link>
                </div>
                
                <div id={Styles.mockX}>
                    <Link className={Styles.projectLink} to='https://mock-x.herokuapp.com/' target="_blank">
                        <h4>
                            <b>MockX</b>
                            <hr />
                        </h4>

                    </Link>
                </div>
                <div id={Styles.wayte}>
                    <Link className={Styles.projectLink} to="https://wayte.netlify.app/" target="_blank">
                        <h4>
                            <b>Wayte</b>
                            <hr />
                        </h4>
                    </Link>
                </div>
                
                
        </section>
        // <section id={Styles.homeProjectSection} className="container">
        //     <div className="row">
        //         <div className="col-8" id={Styles.firstProject}>
        //             First Project
        //         </div>
        //         <div className="col-4" id={Styles.secondProject}>
        //             SecondProject
        //         </div>
        //     </div>
        // </section>
    )
}

export default Main