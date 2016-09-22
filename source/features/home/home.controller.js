class HomeController {
  constructor(Feathers, $scope, SweetAlert) {
    this.$scope = $scope;
    this.SweetAlert = SweetAlert;

    this.products = [];

    Feathers.getInstance()
      .then(app => {
        this.app = app;
        this.getProducts();
      });
  }

  getProducts() {
    this.app.service('products').find()
      .then(response => {
        console.log(response);
        this.$scope.$apply(() => {
          this.products = response.data;
        });
      })
      .catch(error => {
        this.errorAlert(error);
      });
  }

  errorAlert(error) {
    this.SweetAlert.swal({
     title: "Opps",
     text: error.message,
     type: "error"
    }, () => {});
  };
}

angular.module('app.home')
  .controller('HomeController', HomeController);
