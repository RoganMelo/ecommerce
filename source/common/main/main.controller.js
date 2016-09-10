class MainController {
  /* @ngInject */
  constructor (Auth) {
    //this.Auth = Auth;
  }

  // isLogged() {
  //   return this.Auth.isLogged();
  // }
  //
  // logout() {
  //   this.Auth.logout();
  // }
}

angular.module('app.main')
  .controller('MainController', MainController);
