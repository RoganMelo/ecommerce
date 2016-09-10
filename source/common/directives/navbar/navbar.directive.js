const NavbarDirective = () => {
	return {
		templateUrl: 'navbar.directive.html',
		replace: true,
		restrict: 'E'
	}
}

angular.module('app.directive.navbar', [])
	.directive('navbar', NavbarDirective)
