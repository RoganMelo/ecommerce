const Run = () => {};

const Config = ($stateProvider) => {
  return $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'home.view.html',
    controller: 'HomeController',
    controllerAs: 'vm'
  });
};

angular.module('app.home', [])
  .run(Run)
  .config(Config);
