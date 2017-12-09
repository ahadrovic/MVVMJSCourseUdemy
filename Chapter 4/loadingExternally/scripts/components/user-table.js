
requirejs.config({
	paths:{
		templates:'../templates'
	}
})

define([],function () {
	return {
		viewModel:{
			require: 'viewModels/user-table-model' 
		},
		template: {
			require: 'templates/user-table-template'
		}

	}
})