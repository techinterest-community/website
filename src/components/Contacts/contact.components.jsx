import './contact.styles.css';
import { GITHUB, TWITTER, TELEGRAM, DISCORD } from '../../assets';

const ContactList = [
    {
        imgurl: GITHUB, 
        feature: "Github",
        desc: "Build Real world projects with us.",
        link: "https://github.com/techinterest-community"
    },
    {
        imgurl: TWITTER, 
        feature: "Twitter",
        desc: "follow @techinterestyt to get latest updates and opportunities.",
        link: "https://twitter.com/techinterestyt"
    },
    {
        imgurl: DISCORD, 
        feature: "Discord",
        desc: "Get involved and meet amazing community members. Ask technical question about any technology.",
        link: "https://discord.gg/3xMkhtQ6dW"
    },
    {
        imgurl: TELEGRAM, 
        feature: "Telegram",
        desc: "Get important community Announcements and important feeds.",
        link: ""
    }
]


const Contacts = () => {
    return (
        <div className="cnt-div">
            {
                ContactList.map((feat) => (
                    <div className='cnt'>
                        <a href={feat.link}>
                            <img src={feat.imgurl} alt="" />
                        </a>
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