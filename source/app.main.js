/* @ngInject */
const Run = ($rootScope, Auth, $state) => {
  // return amMoment.changeLocale('pt-br');

  $rootScope.$on('$stateChangeStart', (event, toState) => {
    if ((toState.name !== 'login') && (toState.name !== 'register')) {
      if (!Auth.isLogged()) {
        event.preventDefault();
        $state.go('login');
      }
    }
  });
};

/* @ngInject */
const Config = ($stateProvider, $locationProvider, $urlRouterProvider) => {
  $stateProvider.state('app', {
    url: '/login',
    controller: 'LoginController',
    controllerAs: 'root',
    templateUrl: 'login.view.html'
  });

  $urlRouterProvider.otherwise('/login');

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
  .value('apiEndPoint', 'localhost:3030');
