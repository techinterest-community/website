import './feature.styles.css';
import { MENTORING, GUIDANCE, ASSIGNMENT, VIDEO } from '../../assets';

const FeatureList = [
    {
        imgurl: MENTORING, 
        feature: "Mentoring",
        desc: "Get mentored by industry experts"

    },
    {
        imgurl: GUIDANCE, 
        feature: "Guidance",
        desc: "Get expert guidance with career, open source and internships, jobs around the world."

    },
    {
        imgurl: ASSIGNMENT, 
        feature: "Assignments",
        desc: "Assignments and questions are provided to understand the concepts well."

    },
    {
        imgurl: VIDEO, 
        feature: "Videos",
        desc: "Get mentored by industry experts"

    }
]


const Feature = () => {
    return (
        <div className="ft-div">
            {
                FeatureList.map((feat) => (
                    <div className='ft'>
                        <img src={feat.imgurl} alt="" />
                        <h3>{feat.feature}</h3>
                        <p>{feat.desc}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Feature;