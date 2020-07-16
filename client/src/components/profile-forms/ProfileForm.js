import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const initialState = {
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: ''
}

const ProfileForm = ({
    createProfile,
    history,
    profile: { profile, loading },
    getCurrentProfile
}) => {

    const [formData, setFormData] = useState(initialState);

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    useEffect(() => {
        if (!profile) getCurrentProfile();
        if (!loading && profile) {
            const profileData = { ...initialState };
            for (const key in profile) {
                if (key in profileData) profileData[key] = profile[key];
            }
            for (const key in profile.social) {
                if (key in profileData) profileData[key] = profile.social[key];
            }
            if (Array.isArray(profileData.skills))
                profileData.skills = profileData.skills.join(', ');
            setFormData(profileData);
        }
    }, [loading, getCurrentProfile, profile]);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube
    } = formData;

    const onChange = e =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, profile ? true : false);
    };

    return (
        <Fragment>
            <h1 className='large text-primary'>
                Edit Your Profile
            </h1>
            <p className='lead'>
                <i className='fas fa-user' aria-hidden='true' />{' '}
                Make changes to your profile
            </p>
            <small>* = required field</small>
            <form
                className='form'
                onSubmit={onSubmit}
            >
                <div className='form-group'>
                    <select
                        name='status'
                        value={status}
                        onChange={onChange}
                    >
                        <option value='0'>* Select Professional Status</option>
                        <option value='Junior Developer'>Junior Developer</option>
                        <option value='Developer'>Developer</option>
                        <option value='Senior Developer'>Senior Developer</option>
                        <option value='Manager'>Manager</option>
                        <option value='Student or Learning'>Student or Learning</option>
                        <option value='Instructor'>Instructor or Mentor</option>
                        <option value='Other'>Other</option>
                    </select>
                    <small className='form-text'>
                        Provide information regarding your career
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Company'
                        name='company'
                        value={company}
                        onChange={onChange}
                    />
                    <small className='form-text'>
                        It could be your own company or a company you work(ed) for
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Website'
                        name='website'
                        value={website}
                        onChange={onChange}
                    />
                    <small className='form-text'>
                        It could be your own or a company website
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Location'
                        name='location'
                        value={location}
                        onChange={onChange} />
                    <small className='form-text'>
                        City and country (eg. Berlin, DE)
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Skills'
                        name='skills'
                        value={skills}
                        onChange={onChange}
                    />
                    <small className='form-text'>
                        Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Github Username'
                        name='githubusername'
                        value={githubusername}
                        onChange={onChange}
                    />
                    <small className='form-text'>
                        If you want your latest repos and a Github link, include your username
                    </small>
                </div>
                <div className='form-group'>
                    <textarea
                        placeholder='A short bio of yourself'
                        name='bio'
                        value={bio}
                        onChange={onChange}
                    />
                    <small className='form-text'>
                        Don't try too hard
                    </small>
                </div>
                <div className='my-2'>
                    <button
                        onClick={() => toggleSocialInputs(!displaySocialInputs)}
                        type='button'
                        className='btn btn-light'
                    >
                        Add Social Network Links
                    </button>
                </div>
                {displaySocialInputs && (
                    <Fragment>
                        <div className='form-group social-input'>
                            <i className='fab fa-twitter fa-2x' aria-hidden='true' />
                            <input
                                type='text'
                                placeholder='Twitter URL'
                                name='twitter'
                                value={twitter}
                                onChange={onChange}
                            />
                        </div>
                        <div className='form-group social-input'>
                            <i className='fab fa-facebook fa-2x' aria-hidden='true' />
                            <input
                                type='text'
                                placeholder='Facebook URL'
                                name='facebook'
                                value={facebook}
                                onChange={onChange}
                            />
                        </div>
                        <div className='form-group social-input'>
                            <i className='fab fa-youtube fa-2x' aria-hidden='true' />
                            <input
                                type='text'
                                placeholder='YouTube URL'
                                name='youtube'
                                value={youtube}
                                onChange={onChange}
                            />
                        </div>
                        <div className='form-group social-input'>
                            <i className='fab fa-linkedin fa-2x' aria-hidden='true' />
                            <input
                                type='text'
                                placeholder='Linkedin URL'
                                name='linkedin'
                                value={linkedin}
                                onChange={onChange}
                            />
                        </div>
                    </Fragment>
                )}
                <input type='submit' className='btn btn-primary my-1' />
                <Link
                    className='btn btn-light my-1'
                    to='/dashboard'
                >
                    Go Back
                </Link>
            </form>
        </Fragment>
    )
};

ProfileForm.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(ProfileForm);
