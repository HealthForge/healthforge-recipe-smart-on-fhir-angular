import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import SmartOnFhir from './components/smartOnFhir/smartOnFhir';

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .run(() => {
    // Authenticate (if necessary)
    SmartOnFhir.instance().run();
  })

  .component('app', AppComponent);
