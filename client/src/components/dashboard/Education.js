import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
	const educations = education.map(edu => (
		<tr key={edu._id}>
			<td>{edu.school}</td>
			<td className="hide-sm">{edu.degree}</td>
			<td>
				<Moment format="YYYY/MM/DD">{edu.form}</Moment> -{' '}
				{edu.to === null ? ' Now' : <Moment format="YYYY/MM/DD">{edu.to}</Moment>}
			</td>
			<td>
				<button onClick={() => deleteEducation(edu._id)} className="btn btn-danger">
					Delete
				</button>
			</td>
		</tr>
	));

	return (
		<Fragment>
			<h2 className="mi-2">Education credentials</h2>
			<table className="table">
				<thead>
					<tr>
						<th>School</th>
						<th className="hide-sm">Degree</th>
						<th className="hide-sm">Years</th>
						<th />
					</tr>
				</thead>
				<tbody>{educations}</tbody>
			</table>
		</Fragment>
	);
};

Education.propTypes = {
	education: PropTypes.array.isRequired,
	deleteEducation: PropTypes.func.isRequired
};

export default connect(
	null,
	{ deleteEducation }
)(Education);
