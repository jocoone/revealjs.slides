// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Slides, Slide, BG_DARK, Time, Code } from '@slides/slides';
import Markdown from 'reveal.js/plugin/markdown/markdown';
import Notes from 'reveal.js/plugin/notes/notes';
import Highlight from 'reveal.js/plugin/highlight/highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MeSlide from './slides/Me';

export function App() {
  return (
    <Slides plugins={[Markdown, Notes, Highlight]}>
      <Slide className="aligncenter" backgroundOpacity="0.3"
             backgroundImg={'https://images.unsplash.com/photo-1594732476840-3ae488201ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80'}/>
      <MeSlide/>
      <Slide className="aligncenter">
        <h2>Competence Coach</h2>
        <div className="size-60 bg-white shadow aligncenter">
          <ul className="flexblock reasons">
            <li>
              <h2>Why a Coach?</h2>
              <p><code>Dev/Tech leads</code> are often too invested in the technical side of things. This means
                no time for coaching people who need assistance</p>
            </li>
            <li>
              <h2>My Job?</h2>
              <p>Available for answering questions or guiding you to solve more complex Angular problems.</p>
            </li>
            <li>
              <h2>Technical impact</h2>
              <p>I will be the extension of the Tech leads to educate on already made technical decisions</p>
            </li>
            <li>
              <h2>Learning is key 🔑</h2>
              <p>Possible to think together about possible gaps in your knowledge. We can think of individual or group initiatives.</p>
            </li>
          </ul>
        </div>
      </Slide>
    </Slides>
  );
}

export default App;
