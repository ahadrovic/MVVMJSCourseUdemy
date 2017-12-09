require(['knockout-3.4.2','viewModels/appViewModel'],function (ko,appViewModel) {
	ko.applyBindings(new appViewModel());
})