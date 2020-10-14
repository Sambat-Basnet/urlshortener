import React from 'react';
import './App.css';
import Hamburger from 'hamburger-react';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="header">
          
    <div className="parentNav">
    
          <div className="navItem">
          <img src="/images/logo.svg" alt="logo"/>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
          <div className="login">
            <a href="#">Login</a>
            <button>Sign Up</button>
          </div>
          <Hamburger color={'#bfbfbf'} size={30}/>
        </div>
        </div>
        <div className="hero">
        <div className="frontContent">
          <div className="illustration">
            {/* <img src="/images/illustration-working.svg" alt="illustration"/> */}
          </div>
          <div className="quote">
            <h1>More than just shorter links</h1>
            <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <button>Get Started</button>
          </div>
        </div>
        </div>
        <div className="parentFloat">
          <div className="upper"></div>
          <div className="lower"></div>
        <div className="floating">
          <input type="text" placeholder="Shorten a link here..."/>
          <button>Shorten it!</button>
        </div>
        </div>
        <div className="stats">
          <div className="statsDesc">
            <div className="statsContent">
              <div className="statsText">
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="brand">
              <div className="brandRec first">
                <div className="avatar">
                <img src="/images/brandRec.svg" alt="logo"/>
                </div>
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
              </div>
              <span className="line"></span>
              <div className="brandRec second">
              <div className="avatar">
                <img src="/images/detailed.svg" alt="logo"/>
                </div>
              <h3>Detailed Records</h3>
              <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. </p>
              </div>
              <span className="line"></span>
              <div className="brandRec third">
              <div className="avatar">
                <img src="/images/customizable.svg" alt="logo"/>
                </div>
                <h3>Fully Customizable</h3>
                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="boost">
          <div className="boostText">
            <h1>Boost your links today</h1>
            <button>Get Started</button>
          </div>
        </div>
      <div className="mainFoot">
        <div className="footSec">
          <div className="logoSec"><img src="/images/vectorpaint.svg" alt="footerLogo"/></div>
          <div className="collections">
          <div className="collectionSec">
            <h3>Features</h3>
            <ul>
              <li><a href="#">Link Shortening</a></li>
              <li><a href="#">Branded Links</a></li>
              <li><a href="#">Analytics</a></li>
            </ul>
          </div>
          
          <div className="collectionSec">
          <h3>Resources</h3>
            <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="collectionSec">
          <h3>Company</h3>
            <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
          </div>
          </div>
          <div className="iconSec">
            <img src="/images/fbIcon.svg" alt="facebook"/>
            <img src="/images/tweetIcon.svg" alt="twitter"/>
            <img src="/images/pinIcon.svg" alt="pinterest"/>
            <img src="/images/instaIcon.svg" alt="instagram"/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
