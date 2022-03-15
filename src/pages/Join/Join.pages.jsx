import "./Join.style.css";
import { GITHUB, TWITTER, TELEGRAM, DISCORD } from "../../assets";
import { useState } from "react";

const JoinPage = () => {
  const [labeldis, setLevelDis] = useState(false);
  const [labeltwt, setLeveltwt] = useState(false);
  const [labelgit, setLevelgit] = useState(false);
  const [labeltel, setLeveltel] = useState(false);

  return (
    <div className="page">
      <section className='spreads-section'>
        <div className='join-spreads'></div>
        <div className='join-spreads'></div>
        <div className='join-spreads'></div>
        <div className='join-spreads'></div>
      </section>
      
      <h1>COMMUNITY</h1>

      <div className="contact-sec">
        <a
          onMouseEnter={() => setLevelgit(true)}
          onMouseLeave={() => setLevelgit(false)}
          href="https://github.com/techinterest-community"
        >
          <img src={GITHUB} className="git" alt="" />
          {labelgit && (
            <div className="label">
              <p>Github</p>
            </div>
          )}
        </a>

        <a
          onMouseEnter={() => setLeveltwt(true)}
          onMouseLeave={() => setLeveltwt(false)}
          href="/"
        >
          <img src={TWITTER} className="twt" alt="" />
          {labeltwt && (
            <div className="label">
              <p>Twitter</p>
            </div>
          )}
        </a>

        <a
          onMouseEnter={() => setLeveltel(true)}
          onMouseLeave={() => setLeveltel(false)}
          href="/"
        >
          <img src={TELEGRAM} className="tel" alt="" />
          {labeltel && (
            <div className="label">
              <p>Telegram</p>
            </div>
          )}
        </a>
        <a
          onMouseEnter={() => setLevelDis(true)}
          onMouseLeave={() => setLevelDis(false)}
          href="/"
        >
          <img src={DISCORD} className="dis" alt="" />
          {labeldis && (
            <div className="label">
              <p>Discord</p>
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default JoinPage;
