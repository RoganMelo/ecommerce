class Feathers {
  /* @ngInject */
  constructor($q, $rootScope) {
    this.$q = $q;
    this.$rootScope = $rootScope;

    const host = 'http://localhost:3030';
    const socket = io(host);

    const app = feathers()
      .configure(feathers.socketio(socket))
      .configure(feathers.hooks())
      .configure(feathers.authentication({ storage: window.localStorage }));

    app.authenticate()
      .then( result => {
        this.instance = app;
        $rootScope.$emit('app:initialized');
        console.log('logged');
      })
      .catch( error => {
        this.instance = app;
        $rootScope.$emit('app:initialized');
        console.log('no logged');
      });
  }

  getInstance() {
    const deferred = this.$q.defer();
    if (window.alreadyInitialized) {
      deferred.resolve(this.instance);
      return deferred.promise;
    }

    this.$rootScope.$on('app:initialized', () => {
      deferred.resolve(this.instance);
      window.alreadyInitialized = true;
    });

    return deferred.promise;
  }
}

angular.module('app.services.feathers', [])
  .service('Feathers', Feathers);