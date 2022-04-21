import * as React from 'react'
import * as Styles from './Header.module.scss'
import{ Link } from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


function Header(){
    return (
        <section id={Styles.headerSection}>
            <nav id={Styles.navBar}>
                <Link className={Styles.navLinkText} to="/">
                    <span className={Styles.nameLogo}>
                        <b id={Styles.firstName}>MANNY</b> MARTINEZ
                    </span>
                </Link>
            </nav>
            <div id={Styles.headerBody}>
                <h1><b>Manuel Martinez,</b></h1>
                <h3>Software Engineer
                    <span id={Styles.headerSocials}>
                        <Link to='https://github.com/ManuelMartinez45' target="_blank" className={Styles.socialIcon}>
                            <FontAwesomeIcon  icon={ faGithub }/>
                        </Link>
                        <Link to="https://www.linkedin.com/in/manny-martinez-48770511a/" target="_blank" className={Styles.socialIcon}>
                            <FontAwesomeIcon  icon={ faLinkedin }/>
                        </Link>
                    </span>
                </h3>
                <hr />
                <p id={Styles.aboutMe}>
                    I am a Software Engineer based out of Massachusetts. I come from a background in the culinary field. Once I was introduced to the field of web development I gained a creative passion for the field, where I was surprised that so many skills from cooking where transferable and helpful for this new area of learning I was immersed in. As a person who's always on the hunt for a new tid bit of information or skill, whether it be hobby-based, or career-based I've always spent my time furthuring my knowledge on interests. With that being such a core trait of my personality, I melded to this field effortlessly. I attended General Assembly, where I furthured my studies on the fundamentals of JavaScript, CSS and HTML. Additionally they taught me ins and outs of React, Express, Node, Python and many other languages and technologies. I left the course encouraged to keep learning and confident in my skills.
                </p>
            </div>
        </section>
    )
}

export default Header