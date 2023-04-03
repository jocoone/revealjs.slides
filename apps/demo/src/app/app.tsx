// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BG_DARK, Code, Slide, Slides, Time } from "@slides/slides";
import Markdown from "reveal.js/plugin/markdown/markdown";
import Notes from "reveal.js/plugin/notes/notes";
import Highlight from "reveal.js/plugin/highlight/highlight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function App() {
  return (
    <Slides plugins={[Markdown, Notes, Highlight]}>
      <Slide className="size-50 aligncenter">
        <h2>Reasons</h2>
        <p className="text-intro">This is a text intro</p>
        <div className="bg-white shadow">
          <ul className="flexblock reasons">
            <li>
              <h2>Test test test</h2>
              <p>
                WebSlides is about good karma. This is about telling the story, and sharing it in a
                beautiful way. HTML and CSS as narrative elements.
              </p>
            </li>
          </ul>
        </div>
        <aside className="notes">Test</aside>
      </Slide>
      <Slide background={BG_DARK}>
        <h2>flexblock</h2>
        <ul className="flexblock gallery">
          <li>
            <a href="../demos/why-webslides.html" title="Why WebSlides?">
              <figure>
                <img alt="Thumbnail Why WebSlides?"
                     src="https://webslides.tv/static/images/demos-why.png" />
                <figcaption>
                  <h2>Why WebSlides?</h2>
                  <Time time={new Date()} />
                </figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="../demos/landings.html" title="Landings">
              <figure>
                <img alt="Thumbnail Landings"
                     src="https://webslides.tv/static/images/demos-landings.png" />
                <figcaption>
                  <h2>Landings</h2>
                  <time dateTime="2017-01-07T19:21:26-08:00">Jan 07, 2017</time>
                </figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="../demos/portfolios.html" title="Portfolios">
              <figure>
                <img alt="Thumbnail Portfolios"
                     src="https://webslides.tv/static/images/demos-portfolios.png" />
                <figcaption>
                  <h2>Portfolios</h2>
                  <time dateTime="2017-01-06T21:22:21-08:00">Jan 06, 2017</time>
                </figcaption>
              </figure>
            </a>
          </li>
        </ul>
      </Slide>
      <Slide>
        <div className="grid vertical-align">
          <div className="column">
            <h3><strong>WebSlides is really easy</strong></h3>
            <p className="text-intro">Each parent <code>&lt;section&gt;</code> in the #webslides element is
              an individual slide. </p>
            <p>Code is clean and scalable. It uses <strong>intuitive markup</strong> with popular naming
              conventions. There's no need to overuse classes or nesting. <strong>Making an HTML
                presentation has never been so fast</strong>.</p>
          </div>
          <div className="column">
            <Code data-noescape data-trim code={`<div className="column">
    <h3><strong>WebSlides is really easy</strong></h3>
</div>`} />
          </div>
        </div>
      </Slide>
      <Slide>
        <h2><strong>Features</strong></h2>
        <ul className="flexblock features">
          <li>
            <div>
              <h2>
                <span>→</span>
                Simple Navigation
              </h2>
              with arrow keys, presenter...
            </div>
          </li>
          <li>
            <div>
              <h2>
                <FontAwesomeIcon icon={faArrowRight} />
                Permalinks
              </h2>
              Go to a specific slide.
            </div>
          </li>
          <li>
            <div>
              <h2>
                <svg className="fa-clock-o" viewBox="0 0 512 512">


                  <path
                    d="m293 155l0 128c0 3-1 5-3 7-2 2-4 3-7 3l-91 0c-3 0-5-1-7-3-1-2-2-4-2-7l0-18c0-3 1-5 2-6 2-2 4-3 7-3l64 0 0-101c0-2 1-4 3-6 1-2 3-3 6-3l18 0c3 0 5 1 7 3 2 2 3 4 3 6z m118 101c0-28-7-54-20-78-14-24-33-43-57-57-24-13-50-20-78-20-28 0-54 7-78 20-24 14-43 33-57 57-13 24-20 50-20 78 0 28 7 54 20 78 14 24 33 43 57 57 24 13 50 20 78 20 28 0 54-7 78-20 24-14 43-33 57-57 13-24 20-50 20-78z m64 0c0 40-9 77-29 110-20 34-46 60-80 80-33 20-70 29-110 29-40 0-77-9-110-29-34-20-60-46-80-80-20-33-29-70-29-110 0-40 9-77 29-110 20-34 46-60 80-80 33-20 70-29 110-29 40 0 77 9 110 29 34 20 60 46 80 80 20 33 29 70 29 110z"></path>
                </svg>
                Slide Counter
              </h2>
              Current/Total number.
            </div>
          </li>
          <li>
            <div>
              <h2>
                <span>40<sup>+</sup></span>
                Beautiful Components
              </h2>
              Covers, cards, quotes...
            </div>
          </li>
          <li>
            <div>
              <h2>
                <svg className="fa-text-height" viewBox="0 0 512 512">


                  <path
                    d="m498 402c7 0 11 2 12 6 2 3 1 7-3 12l-36 47c-4 5-8 7-14 7-5 0-10-2-14-7l-36-47c-4-5-5-9-3-12 2-4 6-6 12-6l23 0 0-292-23 0c-6 0-10-2-12-6-2-3-1-7 3-12l36-47c4-5 9-7 14-7 6 0 10 2 14 7l36 47c4 5 5 9 3 12-1 4-5 6-12 6l-23 0 0 292z m-475-365l16 8c2 1 22 1 60 1 8 0 21 0 38-1 16 0 29 0 37 0 7 0 17 0 31 1 14 1 24 2 31 2l83 0c2 0 4 0 6 0 3 0 5 0 6 0 1 0 3-1 5-1 2 0 4-1 5-3 1-1 3-2 4-5l12 0c1 0 2 0 4 0 2 0 3 0 4 0 1 22 1 54 1 96 0 16-1 26-2 32-7 2-14 4-19 5-5-9-10-21-16-37 0-2-1-6-3-14-1-7-3-14-4-21-1-6-2-10-2-10-1-1-2-2-3-3-2-1-3-2-5-2-2 0-3-1-4-1 0 0-2 0-5 0-2 0-4 1-4 2-4 0-10 0-19-1-10 0-17 0-22 0-4 0-11 0-18 1-7 0-14 1-20 2-2 15-3 28-3 38 0 18 1 55 1 111 0 56 1 100 1 130 0 3-1 10-1 21-1 10-1 19 0 26 0 7 2 13 3 20 8 4 20 8 36 12 16 4 27 7 34 10 1 8 2 13 2 15 0 2-1 5-1 8l-10 0c-14 1-35 0-62-2-27-2-47-3-59-3-10 0-24 1-44 3-19 1-33 2-43 2-1-9-1-14-1-15l0-2c3-5 9-9 18-12 8-3 18-6 28-9 10-2 18-5 22-7 4-8 6-45 6-110 0-19-1-48-1-86-1-39-1-68-1-87l0-33c0-1 0-2 0-5 0-2 0-5 0-7 0-2-1-5-1-7 0-3 0-5-1-7 0-2 0-3-1-4-2-2-18-4-46-4-7 0-15 2-27 4-11 2-19 5-23 7-3 3-7 10-9 21-3 11-6 22-9 32-4 10-8 15-13 15-8-5-13-9-16-13l0-109z"></path>
                </svg>
                Vertical Rhythm
              </h2>
              Use multiples of 8.
            </div>
          </li>
          <li>
            <div>
              <h2>
                <span>500<sup>+</sup></span>
                SVG Icons
              </h2>
              Font Awesome Kit.
            </div>
          </li>
        </ul>
      </Slide>
      <Slide>
        <div className="grid ms">
          <div className="column">
            <h3>.column 1</h3>
            <p>Incredibly versatile! Auto-fill and equal height. Flexbox is awesome.</p>
          </div>
          <div className="column">
            <h3>.column 2</h3>
            <p>Incredibly versatile! Auto-fill and equal height. Flexbox is awesome. Just focus on your
              content. Have less. Do more. Create beautiful solutions. Our children's world will be
              better.</p>
          </div>
        </div>
      </Slide>
      <Slide>
        <img className="alignright size-50"
             src="https://plus.unsplash.com/premium_photo-1676823570630-be7b7e1ce1bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
             alt="iPhone" />
        <h2>img.size-50</h2>
        <p><code>img.alignright.size-50</code></p>
        <p>Jobs unveiled the iPhone to the public on January 9, 2007, at the Macworld 2007 convention at the
          Moscone Center in San Francisco. Apple sold 6.1 million first generation iPhone units over five
          quarters.</p>
        <p><strong>Image size recommended</strong>:<br /> 800x600px / 600x450px.</p>
      </Slide>
      <Slide>
        <h3>ul.flexblock.steps</h3>
        <ul className="flexblock steps">
          <li>
                <span>
                  <svg className="fa-heartbeat" viewBox="0 0 512 512">


      <path
        d="m366 293l87 0c-1 1-2 2-3 3-1 0-2 1-3 2l0 1-178 171c-4 4-8 5-13 5-5 0-9-1-13-5l-178-172c-1 0-3-2-6-5l106 0c4 0 8-2 11-4 3-3 5-6 6-10l20-80 55 190c1 4 3 7 6 10 3 2 7 3 11 3 4 0 8-1 11-3 3-3 6-6 7-10l41-138 16 32c4 6 9 10 17 10z m146-123c0 28-10 56-29 86l-106 0-32-63c-1-3-4-6-7-8-3-2-7-3-10-2-9 1-14 5-16 13l-37 123-56-196c-1-4-4-7-7-10-3-2-7-3-11-3-4 0-8 1-11 4-4 2-6 5-7 9l-33 133-121 0c-19-30-29-58-29-86 0-42 12-74 36-98 24-24 58-35 101-35 11 0 23 2 36 6 12 4 23 9 34 16 11 7 20 14 27 20 8 6 15 12 22 19 7-7 14-13 22-19 7-6 16-13 27-20 11-7 22-12 34-16 13-4 25-6 36-6 43 0 77 11 101 35 24 24 36 56 36 98z"></path>
    </svg>
                </span>
            <h2>01. Passion</h2>
            <p>When you're really passionate about your job, you can change the world.</p>
          </li>
          <li>
            <div className="process step-2"></div>
            <span>
                  <svg className="fa-magic" viewBox="0 0 512 512">


      <path
        d="m358 166l84-84-31-30-83 83z m128-84c0 5-2 10-5 13l-368 368c-3 3-7 5-12 5-6 0-10-2-13-5l-57-57c-3-3-5-8-5-13 0-5 2-9 5-13l368-367c3-4 7-5 12-5 6 0 10 1 13 5l57 56c3 4 5 8 5 13z m-386-54l28 9-28 8-9 28-8-28-28-8 28-9 8-28z m100 46l56 17-56 18-17 56-17-56-56-18 56-17 17-56z m266 137l28 8-28 9-9 28-8-28-28-9 28-8 8-28z m-183-183l28 9-28 8-9 28-8-28-28-8 28-9 8-28z"></path>
    </svg>
                </span>
            <h2>02. Purpose</h2>
            <p>Why does this business exist? How are you different? Why matters?</p>
          </li>
          <li>
            <div className="process step-3"></div>
            <span>
                  <svg className="fa-balance-scale" viewBox="0 0 512 512">


      <path
        d="m421 128l-110 201 219 0z m-366 0l-110 201 220 0z m234-55c-2 8-7 15-13 21-6 6-12 10-20 13l0 368 174 0c2 0 5 1 6 3 2 2 3 4 3 7l0 18c0 3-1 5-3 6-1 2-4 3-6 3l-384 0c-3 0-5-1-7-3-2-1-2-3-2-6l0-18c0-3 0-5 2-7 2-2 4-3 7-3l173 0 0-368c-7-3-14-7-20-13-6-6-10-13-13-21l-140 0c-3 0-5-1-7-2-2-2-2-4-2-7l0-18c0-3 0-5 2-7 2-2 4-2 7-2l140 0c4-11 11-20 20-27 9-7 20-10 32-10 12 0 22 3 31 10 10 7 16 16 20 27l141 0c2 0 5 0 6 2 2 2 3 4 3 7l0 18c0 3-1 5-3 7-1 1-4 2-6 2z m-51 5c6 0 11-3 16-7 4-4 7-10 7-16 0-6-3-12-7-16-5-5-10-7-16-7-7 0-12 2-16 7-5 4-7 10-7 16 0 6 2 12 7 16 4 4 9 7 16 7z m311 251c0 14-5 27-14 38-9 11-20 19-33 26-14 6-28 11-42 14-14 3-27 4-39 4-13 0-26-1-40-4-14-3-28-8-42-14-13-7-24-15-33-26-9-11-13-24-13-38 0-2 3-10 10-23 6-13 15-30 26-50 11-20 21-38 30-56 10-17 20-35 30-52 9-18 15-28 16-29 3-6 8-9 16-9 7 0 12 3 16 9 0 1 6 11 16 29 9 17 19 35 29 52 9 18 19 36 30 56 11 20 20 37 27 50 6 13 10 21 10 23z m-366 0c0 14-5 27-13 38-9 11-20 19-34 26-14 6-27 11-41 14-14 3-28 4-40 4-13 0-26-1-40-4-14-3-28-8-41-14-14-7-25-15-34-26-9-11-13-24-13-38 0-2 3-10 10-23 7-13 15-30 26-50 11-20 21-38 31-56 9-17 19-35 29-52 10-18 15-28 16-29 3-6 9-9 16-9 7 0 12 3 16 9 1 1 6 11 16 29 10 17 19 35 29 52 10 18 20 36 31 56 10 20 19 37 26 50 7 13 10 21 10 23z"></path>
    </svg>
                </span>
            <h2>03. Principles</h2>
            <p>Leadership through usefulness, openness, empathy, and good taste.</p>
          </li>
          <li>
            <div className="process step-4"></div>
            <span>
                  <svg className="fa-cog" viewBox="0 0 512 512">


      <path
        d="m329 256c0-20-7-37-21-52-15-14-32-21-52-21-20 0-37 7-52 21-14 15-21 32-21 52 0 20 7 37 21 52 15 14 32 21 52 21 20 0 37-7 52-21 14-15 21-32 21-52z m146-31l0 63c0 3 0 5-2 7-1 2-3 3-6 4l-52 8c-4 10-8 19-12 26 7 9 17 22 31 39 2 2 3 5 3 7 0 3-1 5-3 7-5 7-14 17-28 31-14 13-23 20-27 20-2 0-5-1-7-3l-40-31c-8 5-17 8-26 11-3 26-6 44-8 53-1 6-5 8-10 8l-64 0c-2 0-5 0-7-2-2-2-3-4-3-6l-8-53c-9-3-18-6-26-10l-40 30c-2 2-4 3-7 3-3 0-5-1-7-3-24-22-40-38-47-48-2-2-2-4-2-7 0-2 0-4 2-6 3-4 8-11 14-19 7-9 12-16 16-21-5-9-9-19-12-28l-52-8c-3 0-5-1-6-3-2-2-2-4-2-7l0-63c0-3 0-5 2-7 1-2 3-3 5-4l53-8c3-8 7-17 12-26-8-11-18-24-31-39-2-3-3-5-3-7 0-2 1-4 3-7 5-7 14-17 28-30 14-14 23-21 27-21 2 0 5 1 7 3l40 31c8-5 17-8 26-11 3-26 6-44 8-53 1-6 5-8 10-8l64 0c2 0 5 0 7 2 2 2 3 4 3 6l8 53c9 3 18 6 26 10l40-30c2-2 4-3 7-3 3 0 5 1 7 3 25 23 41 39 47 49 2 1 2 3 2 6 0 2 0 4-2 6-3 4-8 11-14 19-7 9-12 16-16 21 5 9 9 18 12 28l52 8c3 0 5 1 6 3 2 2 2 4 2 7z"></path>
    </svg>
                </span>
            <h2>04. Process</h2>
            <ul>
              <li>Useful</li>
              <li>Easy</li>
              <li>Fast</li>
              <li>Beautiful</li>
            </ul>
          </li>
        </ul>
      </Slide>
      <Slide fullscreen={true}>
        <div className="card-50">
          <figure>
            <img src="https://source.unsplash.com/2QHEC81Dt0c/" alt="Áqaba, Jordan" />
            <figcaption>
              <a href="https://unsplash.com/@dburka" title="Daniel Burka">
                <svg className="fa-camera" viewBox="0 0 512 512">


                  <path
                    d="m256 192c23 0 42 8 58 24 16 16 24 36 24 58 0 23-8 42-24 58-16 17-35 25-58 25-23 0-42-8-58-25-16-16-24-35-24-58 0-22 8-42 24-58 16-16 35-24 58-24z m201-119c20 0 38 7 52 22 14 14 21 31 21 51l0 256c0 20-7 38-21 52-14 14-32 21-52 21l-402 0c-20 0-38-7-52-21-14-14-21-32-21-52l0-256c0-20 7-37 21-51 14-15 32-22 52-22l64 0 14-39c4-9 11-17 20-24 10-7 20-10 30-10l146 0c10 0 20 3 30 10 9 7 16 15 20 24l14 39z m-201 329c35 0 65-12 90-37 25-25 38-55 38-91 0-35-13-65-38-90-25-25-55-38-90-38-35 0-65 13-90 38-25 25-38 55-38 90 0 36 13 66 38 91 25 25 55 37 90 37z"></path>
                </svg>
                Daniel Burka (Unsplash)
              </a>
            </figcaption>
          </figure>
          <div className="flex-content">
            <h2>Discover Jordan
            </h2>
            <p>.fullscreen &gt; .card-50</p>
            <p className="text-intro">Aqaba is the only coastal city in Jordan and the largest and most
              populous city on the Gulf of Aqaba.</p>
            <p className="aligncenter"><a className="button" href="https://en.wikipedia.org/wiki/Aqaba">Read
              more »</a></p>
          </div>
        </div>
      </Slide>
    </Slides>
  );
}

export default App;
