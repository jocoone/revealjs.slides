import React from 'react';

export interface SlideProps {
  children?: JSX.Element | JSX.Element[] | undefined;
  className?: string;
  background?: string;
  backgroundImg?: string;
  backgroundOpacity?: string;
  fullscreen?: boolean;
  slideClass?: string;
  bgSpan?: JSX.Element | JSX.Element[] | undefined;
  style?: { [key: string]: string };
}

const Slide: React.FC<SlideProps> = ({
                                       children,
                                       background = '#f6f6f6',
                                       className = '',
                                       fullscreen,
                                       backgroundImg,
                                       backgroundOpacity,
                                       slideClass,
                                       bgSpan,
                                       style = {}
                                     }) => {
  return <section style={style} data-background-image={backgroundImg} data-background-opacity={backgroundOpacity}
                  data-background-color={background}
                  className={`${slideClass} ${fullscreen ? 'fullscreen' : ''}`}>
    {bgSpan}
    <div className={`wrap ${className}`}>
      {children}
    </div>
  </section>;
};

export default Slide;
