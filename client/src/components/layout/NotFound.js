import React, { Fragment } from 'react';

const NotFound = props => {
    return (
        <Fragment>
            <h1 className="x-large text-primary">
                <i className="fas fa-exclamation-triangle" /> Page not found!
            </h1>
            <p className="large">This page does not seem to exist</p>
        </Fragment>
    );
};

export default NotFound;
