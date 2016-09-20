class RegisterController {
  constructor(Feathers, SweetAlert, $localStorage, $state) {
    this.SweetAlert = SweetAlert;
    this.$localStorage = $localStorage;
    this.$state = $state;

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

            this.successAlert();
      		});
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
     title: "Success!",
     text: "Registration successfully complete!",
     type: "success"
    }, () => this.$state.go('home'));
  };

  errorAlert(error) {
    this.SweetAlert.swal({
     title: "Opps",
     text: error.message,
     type: "error"
    }, () => {});
  };
}

angular.module('app.register')
  .controller('RegisterController', RegisterController);
