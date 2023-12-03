import React from 'react';
import '../../stylesheet/tables/TableHighlight.css';

function TableHighlight(props) {
	return (
		<table>
			<thead>
				<tr>
					<th>Id</th>
					<th>UserName</th>
					<th>First name</th>
					<th>Last Name</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>juan17</td>
					<td>Juan Felipe</td>
					<td>Escobar</td>
				</tr>
				<tr id="hla">
					<td id="si">2</td>
					<td>firulais11</td>
					<td>Firulais</td>
					<td>Rendón</td>
				</tr>
				<tr>
					<td>3</td>
					<td>PatoLoco</td>
					<td>Patroclo</td>
					<td>Muñoz</td>
				</tr>
				<tr>
					<td>4</td>
					<td>Mushasho</td>
					<td>Franco</td>
					<td>De Vita</td>
				</tr>
				<tr>
					<td>5</td>
					<td>ElCalvo</td>
					<td>Armando</td>
					<td>Casas</td>
				</tr>
			</tbody>
		</table>
	);
}

export default TableHighlight;