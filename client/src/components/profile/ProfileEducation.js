import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({
    education: {
        school,
        degree,
        fieldofstudy,
        to,
        from,
        description
    }
}) => (
        <div>
            <h3 className="text-dark">{school}</h3>
            <p>
                <Moment format="DD/MM/YYYY">{moment.utc(from)}</Moment> -{' '}
                {!to ? ' Present' : <Moment format="DD/MM/YYYY">{moment.utc(to)}</Moment>}
            </p>
            <p>
                <strong>Degree/Certificate: </strong> {degree}
            </p>
            <p>
                <strong>Field of study: </strong> {fieldofstudy}
            </p>
            <p>
                <strong>Description: </strong> {description}
            </p>
        </div>
    );

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired
};

export default ProfileEducation;
