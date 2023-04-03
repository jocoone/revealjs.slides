import React from 'react';

export interface SlideProps {
    children?: JSX.Element | JSX.Element[] | undefined;
    className?: string;
    background?: string;
    backgroundImg?: string;
    backgroundOpacity?: string;
    fullscreen?: boolean;
}

const Slide: React.FC<SlideProps> = ({
                                          children,
                                          background = '#f6f6f6',
                                          className = '',
                                          fullscreen,
                                          backgroundImg,
                                          backgroundOpacity
                                      }) => {
    return <section data-background-image={backgroundImg} data-background-opacity={backgroundOpacity} data-background-color={background}
                    className={`${fullscreen ? 'fullscreen' : ''}`}>
        <div className={`wrap ${className}`}>
            {children}
        </div>
    </section>
}

export default Slide;
