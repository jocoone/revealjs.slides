// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Slides, Slide, BG_DARK, Time, Code } from '@slides/slides';
import Markdown from 'reveal.js/plugin/markdown/markdown';
import Notes from 'reveal.js/plugin/notes/notes';
import Highlight from 'reveal.js/plugin/highlight/highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight, faBolt,
  faBuilding,
  faCloud,
  faCode, faFaceGrinHearts,
  faFlaskVial,
  faGear, faHeartPulse,
  faServer
} from '@fortawesome/free-solid-svg-icons';
import doSomethingGreat from '../assets/dosomethinggreat.jpg';

const axxesGray = '#313d47';

export function App() {
  return (
    <Slides plugins={[Markdown, Notes, Highlight]}>
      <Slide background={axxesGray} className="aligncenter">
        <h1 className="text-white">FULLSTACK TEAM VISIE <span style={{
          width: "25px",
          borderBottom: '3px solid #e9531d',
          display: 'inline-block',
        }}></span></h1>
      </Slide>
      <Slide className="slide-top" backgroundOpacity=".3" backgroundImg="https://images.unsplash.com/photo-1427348693976-99e4aca06bb9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <h3 style={{
          border: '3px solid black',
          padding: '2rem',
          letterSpacing: '2px'
        }}>Het <strong>Fullstack Team</strong> is een veelzijdig team dat vele lagen van de software beheerst. Het focust op een vlotte communicatie tussen alle lagen met de gebruikerservaring in het achterhoofd. Het team kan meewerken om een <u> volledige applicatie</u> op te zetten van A tot Z, rekening houdend met alle technische aspecten die hierbij komen kijken. Zo kunnen ze input vanuit architectuur, UI/UX, security, design systems, etc. vlot verwerken om een <u>end-to-end gebruikerservaring</u> te bekomen.
        </h3>
      </Slide>
      <Slide>
        <h3><strong>Fullstack</strong> touch points</h3>
        <hr/>
        <ul className="flexblock features">
          <li>
            <div>
              <h2>
                <span><FontAwesomeIcon icon={faServer} /></span>
                Backend
              </h2>
              Backend (language agnostic), ...
            </div>
          </li>
          <li>
            <div>
              <h2>
                <span><FontAwesomeIcon icon={faFlaskVial} /></span>
                Testing
              </h2>
              E2E, Contract, Unit, ...
            </div>
          </li>
          <li>
            <div>
              <h2>
                <span><FontAwesomeIcon icon={faCloud} /></span>
                Cloud
              </h2>
              AWS, Azure, Google Cloud, ...
            </div>
          </li>
          <li>
            <div>
              <h2>
                <span><FontAwesomeIcon icon={faGear} /></span>
                Devops
              </h2>
              CI/CD, GitOps, ...
            </div>
          </li>
          <li>
            <div>
              <h2>
                <span><FontAwesomeIcon icon={faCode} /></span>
                Frameworks
              </h2>
             Angular, React, Vue, ...
            </div>
          </li>
          <li>
            <div>
              <h2>
                <span><FontAwesomeIcon icon={faBuilding} /></span>
                Architecture
              </h2>
             Connect the dots
            </div>
          </li>
        </ul>
      </Slide>
      <Slide>
        <h3><strong>Fullstack</strong> touch points</h3>
        <hr/>
        <h4>We have a lot of contact points with other <strong>Teams, Leagues and Tribes</strong>.</h4>
        <h4>Will be some overlap but we can use that to our advantage.</h4>
      </Slide>
      <Slide className="size-60">
        <h3><strong>Fullstack</strong> touch points - Pitfalls</h3>
        <hr/>
        <div className="bg-white shadow">
          <ul className="flexblock reasons">
            <ul>
              <li>
                <h2>A lot of touch points</h2>
                <p>Lots of touch points means less focus on one single topic. This can cause a spread in interests.</p>
              </li>
              <li>
                <h2>Open for all frameworks/languages</h2>
                <p>Language agnostic means we will have many different influences and opinions.</p>
              </li>
              <li>
                <h2>Biased opinion about backend in frontend</h2>
                <p>Lot's of people will think it's weird to have a team that does backend in a frontend league.</p>
              </li>
            </ul>
          </ul>
        </div>
      </Slide>
      <Slide className="text-white" backgroundImg={doSomethingGreat} backgroundOpacity=".3" background={axxesGray}></Slide>
      <Slide className="text-white" backgroundImg={doSomethingGreat} backgroundOpacity=".3" background={axxesGray}>
        <div style={{ zIndex: '1'}}>
          <h3><strong>Personal</strong> opinion</h3>
          <hr style={{
            background: 'linear-gradient(to right, white, gray)'
          }} />
          <ul className="flexblock steps">
            <li style={{color: axxesGray}}>
              <span>
                <FontAwesomeIcon icon={faHeartPulse} />
              </span>
              <h2>Will need your help</h2>
              <p>Can't do everything on my own</p>
            </li>
            <li style={{color: axxesGray}}>
              <div className="process step-2"></div>
              <span>
                <FontAwesomeIcon icon={faFaceGrinHearts} />
              </span>
              <h2>Open culture</h2>
              <p>Let's help each other as much as possible. I'm always open for suggestions</p>
            </li>
            <li style={{color: axxesGray}}>
              <div className="process step-3"></div>
              <span>
                <FontAwesomeIcon icon={faBolt} />
              </span>
              <h2>Knowledge sharing</h2>
              <p>Knowledge sharing was a bit lower in the complete league, so I hope to give it a boost in our team.</p>
            </li>
          </ul>
        </div>
      </Slide>
    </Slides>
  );
}

export default App;
