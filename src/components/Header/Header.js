import * as React from 'react'
import * as Styles from './Header.module.scss'
import{ Link } from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


function Header(){
    return (
        <section id={Styles.headerSection}>
            <nav id={Styles.navBar}>
                <Link className={Styles.navLinkText} to="/">
                    <span className={Styles.nameLogo}>
                        <b id={Styles.firstName}>MANNY</b> MARTINEZ
                    </span>
                </Link>
                {/* <Link className={Styles.navLinkText} to="#">
                    <span className={Styles.rightMenu}>
                        MENU
                    <FontAwesomeIcon id={Styles.menuIcon}icon={faBars} />
                    </span>
                </Link> */}
            </nav>
            <div id={Styles.headerBody}>
                <h1><b>Manuel Martinez,</b></h1>
                <h3>Software Engineer</h3>
                <hr />
            </div>
            {/* <div id={Styles.projectBtn}>
                <Link to='#' className={Styles.navLinkText}>
                    <p id={Styles.viewProjects}>
                        View Projects 
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </p> 
                </Link>
            </div> */}
        </section>
    )
}

export default Header