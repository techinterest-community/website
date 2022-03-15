import './contact.styles.css';
import { GITHUB, TWITTER, TELEGRAM, DISCORD } from '../../assets';

const ContactList = [
    {
        imgurl: GITHUB, 
        feature: "Github",
        desc: "Build Real world projects with us."
    },
    {
        imgurl: TWITTER, 
        feature: "Twitter",
        desc: "follow @techinterestyt to get latest updates and opportunities."
    },
    {
        imgurl: DISCORD, 
        feature: "Discord",
        desc: "Get involved and meet amazing community members. Ask technical question about any technology."
    },
    {
        imgurl: TELEGRAM, 
        feature: "Telegram",
        desc: "Get important community Announcements and important feeds."
    }
]


const Contacts = () => {
    return (
        <div className="cnt-div">
            {
                ContactList.map((feat) => (
                    <div className='cnt'>
                        <img src={feat.imgurl} alt="" />
                        <div className='cnt-content'>
                            <h3>{feat.feature}</h3>
                            <div className='cnt-desc'>{feat.desc}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Contacts;