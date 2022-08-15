import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css'

const Footer= () => {
    return (
        <div id='footer-container'>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/xiangyou-wang-800988139/">
                        <img src="https://sharethis.imgix.net/2017/05/LinkedIn.png?fm=webp&auto=compress&q=1" width='30px'></img>
                    </a>
                </li>
                <li>
                    <Link to='/about'>
                        about
                    </Link>
                </li>
                <li>
                    <a href="https://github.com/whatsup-world">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width='30px'></img>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Footer
