import {useEffect} from 'react';
import Reveal from 'reveal.js';

import './slides.scss';
export interface SlidesProps {
  plugins: Reveal.PluginFunction[];
  children: JSX.Element | JSX.Element[];
}

export function Slides({plugins = [], children}: SlidesProps) {
  useEffect(() => {
    setTimeout(() => {
      new Reveal( {
        plugins,
        slideNumber: true,
        disableLayout: true,
        display: 'flex',
        hash: true
      }).initialize();
    }, 1000);
  }, []);

  return (
    <>
      {children}
    </>
  );
}

export default Slides;
