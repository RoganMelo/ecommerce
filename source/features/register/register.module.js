const Run = () => {};

const Config = ($stateProvider) => {
  return $stateProvider.state('register', {
    url: '/register',
    templateUrl: 'register.view.html',
    controller: 'RegisterController',
    controllerAs: 'vm'
  });
};

angular.module('app.register', [])
  .run(Run)
  .config(Config);
