const Run = () => {};

const Config = ($stateProvider) => {
  return $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: 'contact.view.html',
    controller: 'ContactController',
    controllerAs: 'vm'
  });
};

angular.module('app.contact', [])
  .run(Run)
  .config(Config);
