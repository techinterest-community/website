import { FOUNDER } from "../../assets";
import './commintro.styles.css';
const CommIntro = () => {
    return (
        <div className="comm-intro">
            <img src={FOUNDER} className="founder-img" alt="" />
            <div className="founder-comment">
                <p>
                    Hi, I am Siddhant, Founder of the Tech Interest community. 
                    I started this community to bring together peers to learn new 
                    skills and solve real-world problems. This community majorly focuses 
                    on gaining knowledge from the vast Open Source World. Our community is 
                    not only about getting <b>FREE</b> mentorship and training but lot more than that.
                </p>
            </div>
            <p className="quote-mark">"</p>
        </div>
    )
}

export default CommIntro;