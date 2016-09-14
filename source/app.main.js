/* @ngInject */
const Run = ($rootScope, Auth, $state) => {
  // return amMoment.changeLocale('pt-br');

  // $rootScope.$on('$stateChangeStart', (event, toState) => {
  //   if ((toState.name !== 'login') && (toState.name !== 'register')) {
  //     if (!Auth.isLogged()) {
  //       event.preventDefault();
  //       $state.go('login');
  //     }
  //   }
  // });
};

/* @ngInject */
const Config = ($stateProvider, $locationProvider, $urlRouterProvider) => {
  $stateProvider.state('app', {
    url: '/home',
    controller: 'HomeController',
    controllerAs: 'root',
    templateUrl: 'home.view.html'
  });

  $urlRouterProvider.otherwise('/home');

  //using HTML5 History API
  //$locationProvider.html5Mode(true);
};

angular.module('app', [
  'app.3dparty',
  'app.common',
  'app.modules'
])
  .run(Run)
  .config(Config)
  .value('apiEndPoint', '192.168.1.12:3030');
