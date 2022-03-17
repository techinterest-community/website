import './sidebar.styles.css';
import { useState } from 'react';
const SideBar = ({ display }) => {
    const [ shown, setShown ] = useState(display);

    const sidebarClass = shown ? "side-bar display-block" : "side-bar display-none"
    return (
        <div className={sidebarClass}>
            <ul className='side-bar-list'>
                <span onClick={() => setShown(false)}>X</span>
                <li><label>01.</label> <a href='/'>About</a></li>
                <li><label>02.</label> <a href='/projects'>Projects</a></li>
                <li><label>03.</label> <a href='/videos'>Videos</a></li>
                <li><label>04.</label> <a href='/blogs'>Blogs</a></li>
                <li><label>05.</label> <a href='/join'>Join &#8594;</a></li>
            </ul>
        </div>
    )
}

export default SideBar;