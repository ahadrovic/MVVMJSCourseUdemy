define([],function () {
	var markup = `
		<div>
		<table>
			<tr>
				<th>Username</th>
				<th>Age</th>
				<th>Active?</th>
				<th>Last Name</th>
				<th>DOB</th>
				<th>Favorite No.</th>
			</tr>
			<tbody data-bind = "foreach:{data:users,as:'user'}">
				<tr>
					<td data-bind = "text:user.uname"></td>
					<td data-bind = "text:user.age"></td>
					<td data-bind = "text:user.active"></td>
					<td data-bind = "text:user.fullname.lname"></td>
					<td data-bind = "text:user.dob"></td>
					<td data-bind = "text:user.favNo"></td>
				</tr>
			</tbody>
		</table>
	</div>

	`
	return markup;
})