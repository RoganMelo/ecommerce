class MainController {
  /* @ngInject */
  constructor (Auth, $localStorage, $state) {
    this.Auth = Auth;
    this.$localStorage = $localStorage;
    this.$state = $state;
  }

  getUsername() {
    if(this.$localStorage.user)
      return this.$localStorage.user.name;
    else
      return '';
  }

  isLogged() {
    return this.Auth.isLogged();
  }

  logout() {
    this.Auth.logout();
    this.$localStorage.$reset();
    this.$state.go('login');
  }
}

angular.module('app.main')
  .controller('MainController', MainController);
