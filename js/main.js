import {clock} from './components/clock.js'

import {form} from './components/form/form.js'

import {renderSocials} from './components/renderSocials.js';
import {socialsData} from './data/socialsData.js';

import {renderProgressBars} from './components/renderProgressBars.js'
import {progressBarData} from './data/progressBarData.js';


clock('.clock', '12-14 18:00:00');
form('.hero .form');
renderProgressBars('.left-column', progressBarData);
form('.right-column .form')
renderSocials('footer > .socials', socialsData);



