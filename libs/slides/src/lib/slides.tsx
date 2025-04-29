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
      Reveal.initialize( {
        plugins,
        slideNumber: true,
        disableLayout: true,
        display: 'flex',
        hash: true
      });
    }, 1000);
  }, [plugins]);

  return (
    <>
      {children}
    </>
  );
}

export default Slides;
