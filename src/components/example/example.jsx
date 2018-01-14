import React from 'react';
import PropTypes from 'prop-types';
import './example.scss';
const Example = ({ number, increase }) => {
    return (
        <div className="example">
            <h2>Example Component</h2>
            <div>
                <p>{number}</p>
                <button onClick={increase}>Increase</button>
            </div>
        </div>
    );
};

Example.propTypes = {
    number: PropTypes.number,
    increase: PropTypes.func,
};

export default Example;