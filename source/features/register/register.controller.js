class RegisterController {
  constructor(Feathers, SweetAlert, $localStorage) {
    this.SweetAlert = SweetAlert;
    this.$localStorage = $localStorage;

    this.user = {};

    Feathers.getInstance()
      .then(app => {
        this.app = app;
      });
  }

  register() {
    if(this.user.password === this.confirmPassword) {
      this.app.service('users').create(this.user)
        .then(response => {
          this.app.authenticate({
      			type: 'local',
      			'email': this.user.email,
      			'password': this.user.password
      		}).then(response => {
      			this.$localStorage.user = this.app.get('user');
      			this.$localStorage.token = this.app.get('token');

      			this.$state.go('home');
      		}).catch(error => {
      			this.errorAlert(error);
      		});
          console.log(response);
          this.successAlert();
        })
        .catch(error => {
          console.log(error);
          this.errorAlert(error);
        });
    } else {
      this.errorAlert({ message: "Password and confirm password must be equal." });
    }
  }

  successAlert() {
    this.SweetAlert.swal({
     title: "Sucesso!",
     text: "Cadastro efetuado com sucesso!",
     type: "success"
    },
    () => {
      window.history.back();
    });
  };

  errorAlert(error) {
    this.SweetAlert.swal({
     title: "Opps",
     text: error.message,
     type: "error"
    },
    () => {});
  };
}

angular.module('app.register')
  .controller('RegisterController', RegisterController);
