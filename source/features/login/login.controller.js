class LoginController {
  constructor(Feathers, $localStorage, $state, SweetAlert) {
		this.SweetAlert = SweetAlert;
		this.$localStorage = $localStorage;
		this.$state = $state;

		this.user = {};

		Feathers.getInstance()
			.then(app => {
				this.app = app;
			});
	}

  auth() {
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
	}

  errorAlert(error) {
    this.SweetAlert.swal({
     title: "Opps",
     text: error.message,
     type: "error"
    }, () => {});
  };
}

angular.module('app.login')
  .controller('LoginController', LoginController);
