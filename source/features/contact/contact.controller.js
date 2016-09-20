class ContactController {
  constructor(Feathers, SweetAlert) {
    this.SweetAlert = SweetAlert;

    this.contact = {};

    Feathers.getInstance()
      .then(app => {
        this.app = app;
      });
  }

  save() {
    this.app.service('contacts').create(this.contact)
      .then(response => {
        console.log(response);
        this.successAlert();
      })
      .catch(error => {
        console.log(error);
        this.errorAlert(error);
      });
  }

  successAlert() {
    this.SweetAlert.swal({
     title: "Contato efetuado com sucesso!",
     text: "Em breve será respondido!",
     type: "success"
    }, () => window.history.back());
  };

  errorAlert(error) {
    this.SweetAlert.swal({
     title: "Opps",
     text: error.message,
     type: "error"
    }, () => {});
  };
}

angular.module('app.contact')
  .controller('ContactController', ContactController);
