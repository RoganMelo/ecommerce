class ContactController {
  constructor(Feathers) {
    Feathers.getInstance()
      .then(app => {
        console.log(app);
        this.app = app;
      });

    this.contact = {};
  }

  save() {
    this.app.service('contacts').create(this.contact)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

angular.module('app.contact')
  .controller('ContactController', ContactController);
