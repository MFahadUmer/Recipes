import React from 'react';
import ClockLoader from 'react-spinners/ClockLoader';

// eslint-disable-next-line react/prop-types
const Loading = ({ color, loading }) => (
  <div className="loading">
    <ClockLoader color={color} loading={loading} size={150} />
  </div>
);

export default Loading;
