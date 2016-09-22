class ProductController {
  constructor(Feathers, SweetAlert) {
    this.SweetAlert = SweetAlert;

    this.product = {};

    Feathers.getInstance()
      .then(app => {
        this.app = app;
      });
  }

  save() {
    this.app.service('products').create(this.product)
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
     title: "Sucesso",
     text: "Produto cadastrado com sucesso!",
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

angular.module('app.product')
  .controller('ProductController', ProductController);
