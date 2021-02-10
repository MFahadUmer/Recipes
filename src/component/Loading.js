import React from 'react';
import PropTypes from 'prop-types';
import ClockLoader from 'react-spinners/ClockLoader';

const Loading = ({ color, loading }) => (
  <div className="loading">
    <ClockLoader color={color} loading={loading} size={150} />
  </div>
);

Loading.propTypes = {
  color: PropTypes.string,
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  color: '',
  loading: false,
};

export default Loading;
