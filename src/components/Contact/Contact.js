import * as React from 'react'
import * as Styles from './Contact.module.scss'
import { Link } from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact(){
    return (
        <div id={Styles.contactPage}>
            <div id={Styles.contactSection}>
                <form method="post" action="https://getform.io/f/174e7918-0e30-4470-a963-e0d14a1b0db8">
                    <p>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </p>

                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </p>
                    <br />
                    <p id={Styles.messageSection}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="10" />
                    </p>
                        <button id={Styles.sendBtn} type="submit">Send Message</button>
                        <input type="reset" value="Clear" id={Styles.clearBtn}/>
                </form>
            </div>
            <div id={Styles.infoSection}>
                <div id={Styles.infoSubSection}>
                    <div id={Styles.subSectionBody}>
                        <p>
                            <FontAwesomeIcon className={Styles.iconClass}icon={faEnvelope} />
                        </p>
                        <h4>Email</h4>
                    </div>
                    <p id={Styles.subSectionInfo}>M.Martinez45@Hotmail.com</p>
                </div>
                <div id={Styles.infoSubSection}>
                    <div id={Styles.subSectionBody}>
                        <p>
                            <FontAwesomeIcon className={Styles.iconClass}icon={faPhone} />
                        </p>
                        <h4>Phone Number</h4>
                    </div>
                    <p id={Styles.subSectionInfo}>(508)-542-0226</p>
                </div>
                <div id={Styles.infoSubSection}>
                    <div id={Styles.subSectionBody}>
                        <p>
                            <FontAwesomeIcon className={Styles.iconClass}icon={faUser} />
                        </p>
                        <h4>Socials</h4>
                    </div>
                    <p id={Styles.subSectionInfo}>
                        <Link to='https://github.com/ManuelMartinez45' target="_blank" className={Styles.socialIcon}>
                            <FontAwesomeIcon  icon={ faGithub }/>
                        </Link>
                        <Link to="https://www.linkedin.com/in/manny-martinez-48770511a/" target="_blank" className={Styles.socialIcon}>
                            <FontAwesomeIcon  icon={ faLinkedin }/>
                        </Link>
                    </p>
                </div>
               
            </div>
        </div>
    )
}

export default Contact