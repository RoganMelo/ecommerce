class Auth {
  /* @ngInject */
  constructor ($localStorage, $state) {
    this.$localStorage = $localStorage;
    this.$state = $state;
  }

  isLogged() {
    return this.$localStorage.user ? true : false
  }

  logout() {
    this.$localStorage.user = null;
    window.localStorage.clear();
    this.$state.go('login');
  }
}

angular.module('app.services.auth', [])
  .service('Auth', Auth);