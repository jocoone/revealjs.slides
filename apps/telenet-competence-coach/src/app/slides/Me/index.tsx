import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faBicycle} from '@fortawesome/free-solid-svg-icons';

import me from './me.jpg';
import angular from '../../../assets/angular.png';
import telenet from '../../../assets/telenet.png';
import axxes from '../../../assets/axxes.svg';
import {Slide} from '@slides/slides';

const MeSlide = () => (
    <Slide fullscreen={true}>
        <div className="card-50">
            <figure>
                <img src={me} alt="Joey Comhaire"/>
            </figure>
            <div className="flex-content">
                <h2><b>Joey Comhaire</b></h2>
                <p className="text-intro">Competence Coach: Angular <img src={angular} alt="Angular Logo" style={{
                    height: '48px',
                    verticalAlign: 'middle'
                }}/></p>
                <div className="alignleft">
                    <ul className="flexblock specs">
                        <li>
                            <div>
                                <img src={axxes} alt="Axxes Logo" style={{height: '100%'}}/>
                                <h2>Consultant</h2>
                                9 years of Fullstack experience and <b>League Coach</b>
                            </div>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faCode}/>
                                <h2>Frontend focus</h2>
                                Multiple Frameworks, MFE, UI/UX, DevOPS, etc.
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={telenet} alt="Telenet Logo" style={{height: '100%'}}/>
                                <h2>Experience in multiple businesses</h2>
                                Media, Education, Healthcare, Car Leasing
                            </div>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon icon={faBicycle}/>
                                <h2>Love sports ❤️</h2>
                                Road bike riding, Snowboarding, Watching f1, ...
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Slide>
);

export default MeSlide;
