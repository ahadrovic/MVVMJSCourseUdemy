define(['knockout-3.4.2'],function (ko) {
	return function appViewModel(){
		this.firstName = ko.observable("Ernie");
		this.firstNameCaps = ko.pureComputed(function () {
			return this.firstName().toUpperCase();
		},this)
	};

});