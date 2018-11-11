import * as Angular from 'angular'

import 'oclazyload'
import 'angular-ui-router'
import 'angular-sanitize'
import 'angular-animate'
import 'angular-touch'
import 'angular-resource'
import 'angular-ui-bootstrap'

import './scss/app.scss';


const ngModule = Angular.module('glBenchTest',
    [
        'ui.router',
        'oc.lazyLoad',
        'ngResource',
        'ngSanitize',
        'ngAnimate',
        'ngTouch',
        'ui.bootstrap'
    ]);

require('./js/config').default(ngModule);
require('./js/config.ui.router').default(ngModule);
require('./js/controllers/errorCtrl.js').default(ngModule);
require('./js/controllers/appCtrl').default(ngModule);
require('./js/controllers/accountsCtrl.js').default(ngModule);
require('./js/controllers/ModalInstanceCtrl.js').default(ngModule);
require('./js/controllers/serv.js').default(ngModule);