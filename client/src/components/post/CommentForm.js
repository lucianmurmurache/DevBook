import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ addComment, postId }) => {
    const [text, setText] = useState('');
    return (
        <div className='post-form'>
            <form
                className='form my-1'
                onSubmit={e => {
                    e.preventDefault();
                    addComment(postId, { text });
                    setText('');
                }}
            >
                <textarea
                    name='text'
                    cols='30'
                    rows='3'
                    placeholder='Leave a comment...'
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <input
                    type='submit'
                    className='btn btn-dark my-1'
                    value='Submit'
                />
            </form>
        </div>
    )
};

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
