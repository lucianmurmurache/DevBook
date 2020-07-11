import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({
    experience: {
        company,
        title,
        location,
        to,
        from,
        description
    }
}) => (
        <div>
            <h3 className="text-dark">{company}</h3>
            <p>
                <Moment format='DD/MM/YYYY'>{moment.utc(from)}</Moment> - {!to ? ' Present' : <Moment format='DD/MM/YYYY'>{moment.utc(to)}</Moment>}
            </p>
            <p>
                <strong>Position: </strong>{title}
            </p>
            <p>
                <strong>Position: </strong>{location}
            </p>
            <p>
                <strong>Description: </strong>{description}
            </p>

        </div>
    );

ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
