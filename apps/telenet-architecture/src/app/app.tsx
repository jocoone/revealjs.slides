// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Slides, Slide, BG_DARK, Time, Code } from '@slides/slides';
import Markdown from 'reveal.js/plugin/markdown/markdown';
import Notes from 'reveal.js/plugin/notes/notes';
import Highlight from 'reveal.js/plugin/highlight/highlight';

import architecture from '../assets/architecture.jpg';
import telenetBuilding from '../assets/telenetbuilding.jpeg';
import telenetLogo from '../assets/telenet.png';
import modernisation from '../assets/modernisation.png';
import angularjs from '../assets/angularjs.png';
import angular from '../assets/angular.png';
import monolith from '../assets/monolith.png';
import java from '../assets/java.png';
import aem from '../assets/aem.jpeg';
import oldarchitecture from '../assets/oldarchitecture.png';
import newarchitecture from '../assets/newarchitecture.png';
import monorepo from '../assets/monorepo.png';
import testdiamond from '../assets/testdiamond.png';

const axxesGray = '#313d47';

export function App() {
  return (
    <Slides plugins={[Markdown, Notes, Highlight]}>
      <Slide background={axxesGray} backgroundImg={architecture} backgroundOpacity=".2" className="aligncenter">
        <h1 className="text-white" style={{fontSize: '10rem', fontWeight: 'bolder'}}>Architecture at Telenet</h1>
      </Slide>
      <Slide backgroundImg={telenetBuilding} backgroundOpacity=".2" background={axxesGray} className="text-white">
        <div className="alignleft">
          <p className="text-subtitle">Bedrijf</p>
          <h2 style={{
            display: "flex",
            alignItems: 'center',
            gap: '1rem'
          }}>
            <img src={telenetLogo} style={{height: '50px'}} alt="telenet logo"/>
            <strong>Telenet</strong>
          </h2>
          <p>
            <blockquote>
              <p>Telenet Group is een Vlaamse aanbieder van <b>televisie, internet en telefonie</b>. Het bedrijf is in 1996 opgericht en is gevestigd in <b>Mechelen</b>. Na een bod op alle aandelen is het bedrijf in 2023 volledig in handen gekomen van <b>Liberty Global</b> en is de beursnotering per 13 oktober 2023 beëindigd.</p>
              <p><cite>Wikipedia</cite></p>
            </blockquote>
          </p>
        </div>
      </Slide>
      <Slide slideClass="bg-gradient-gray">
        <h3>Waar situeer ik mezelf</h3>
        <div className="bg-white shadow">
          <ul className="flexblock reasons">
            <li>
              <h2>Digital Engagement Tribe</h2>
              <p>Tribe waar een groot deel van het customer portal gemaakt wordt.</p>
            </li>
            <li>
              <h2>Selfcare Team</h2>
              <p>Team bestaande uit 2 subteams dat verantwoordelijk is voor het deel waar klanten zelf aanpassingen kunnen maken aan hun producten.</p>
            </li>
            <li>
              <h2>Frontend Developer/Dev lead</h2>
              <p>Developer in het team en verantwoordelijke om hoger genomen beslissingen (architecten/Tech leads) in uitvoering te brengen.</p>
            </li>
            <li>
              <h2>Initiatieven</h2>
              <p>Cornucopia 1.0, Chill your bill, Cornucopia 2.0, Service cases</p>
            </li>
          </ul>
        </div>
      </Slide>
      <Slide slideClass="bg-gradient-gray">
        <div className="grid vertical-align">
          <div className="column">
            <img src={modernisation} alt="modernisation" />
          </div>
          <div className="column">
            <h4><strong>Waar komen we vandaan</strong></h4>
            <p className="text-intro">Telenet heeft veel digitale transities doorstaan</p>
            <p>Modernisaties op modernisaties op modernisaties</p>
            <p style={{display: 'flex', gap: '50px'}}>
              <img style={{height: '80px'}} src={angularjs} alt="angularjs logo"/>
              <img style={{height: '80px'}} src={angular} alt="angular logo"/>
              <img style={{height: '80px'}} src={monolith} alt="monolith"/>
              <img style={{height: '80px'}} src={java} alt="java logo"/>
            </p>
          </div>
        </div>
      </Slide>
      <Slide slideClass="bg-gradient-gray aligncenter">
        <p>
          <blockquote>
            <h4>Code becomes legacy from the moment you write it</h4>
            <p><cite>Uncle Bob</cite></p>
          </blockquote>
        </p>
      </Slide>
      <Slide slideClass="aligncenter" background="#fcfcfc" >
        <img src={aem} alt="aem"/>
      </Slide>
      <Slide slideClass="aligncenter">
        <img src={oldarchitecture} alt="old architecture"/>
      </Slide>
      <Slide slideClass="aligncenter">
        <h1>AEM DEMO</h1>
      </Slide>
      <Slide slideClass="aligncenter">
        <img src={newarchitecture} alt="new architecture"/>
      </Slide>
      <Slide slideClass="aligncenter" backgroundImg={monorepo}></Slide>
      <Slide slideClass="aligncenter" backgroundImg={testdiamond}></Slide>
      <Slide slideClass="aligncenter">
        <h1>DEMO PLAYWRIGHT</h1>
      </Slide>
    </Slides>
  );
}

export default App;
