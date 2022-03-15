import "./home.styles.css";
import { CommIntro, Feature, Contacts } from "../../components";
const Home = () => {
  return (
    <div className="home">
      <section className='spreads-section'>
        <div className='spreads'></div>
        <div className='spreads'></div>
        <div className='spreads'></div>
        <div className='spreads'></div>
      </section>
      <div className="greet-content">
        <h1>Welcome to </h1>
        <h1 className="tic">
          Tech Interest <span className="com-des">Community</span>
        </h1>
        <p>A Open Source Community to Learn, Grow and Build.</p>
      </div>

      <div className="about-section">
        <h1>About</h1>
        <hr />
        <CommIntro />
      </div>

      {/* Community Feature Section */}
      <div className="community-ft">
        <div className="right-align">
          <h1>Community Feature</h1>
        </div>
        <div className="feature-section">
          <div className="space"></div>
          <Feature />
        </div>
      </div>

      <div className="join-comm">
        <div className="join-header">
          <h1>Join our Community</h1>
          <span>Be a part of our growing Community &#8594;</span>
          <div className="contact-containter">
            <Contacts/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
