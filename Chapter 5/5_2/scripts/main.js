
require(['jquery-3.2.1.min','knockout','knockout.mapping-latest'],function (jquery,ko,mapping) {
	
	ko.mapping = mapping;

	var obj = {
		uname:'jDoe',
		email: 'jdoe@email.com',
		age: 22,
		active: true
	}
	var json = `
		[
			{
				"uname":"jDoe",
				"email":"jdoe@gmail.com",
				"age":"22",	
				"active":"yes"
			},

			{
				"uname":"jSon",
				"email":"json@gmail.com",
				"age":"33",	
				"active":"no"
			}

		]
	`
	//var vm = ko.mapping.fromJS(obj);
	var vm = ko.mapping.fromJSON(json)
	console.log(vm()[0])
	ko.applyBindings(vm()[0]);
})