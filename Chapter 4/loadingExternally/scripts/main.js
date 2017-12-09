requirejs.config({
	paths:{
		users: '../data/users'

	}
})

require(['knockout-3.4.2','components/user-table','users'],function (ko,userTable,users) {
	
	ko.components.register('my-users-table',userTable);

	ko.applyBindings({
			myUsersArray: ko.observableArray(users)
		});

})