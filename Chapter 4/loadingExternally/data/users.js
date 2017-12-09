define([],function () {
	
	var users = [
	
            {
                uid: 1,
                uname: "jDoe",
                age: 26,
                active: true,
                fullname: {fname: "John", mname: "Jay", lname:"Doe"},
                dob: new Date("1991-08-08").toLocaleString().split(',')[0],
                favNo: 33
            },

            {
                uid: 2,
                uname: "jSon",
                age: 26,
                active: true,
                fullname: {fname: "Jay", mname: "", lname:"Son"},
                dob: new Date("1990-07-07").toLocaleString().split(',')[0],
                favNo: 55
            }

            ]


	return users;


});