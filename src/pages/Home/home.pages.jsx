import './home.styles.css';
import { CommIntro } from '../../components';
const Home = () => {
    return (
        <div className="home">
            <div className="greet-content">
                <h1>Welcome to </h1>
                <h1 className='tic'>Tech Interest <span className='com-des'>Community</span></h1>
                <p>A Open Source Community to Learn, Grow and Build.</p>
            </div>
            
            <div className="about-section">
                <h1>About</h1>
                <hr />
                <CommIntro/>
            </div>
        </div>
    )
}

export default Home;