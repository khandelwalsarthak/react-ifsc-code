import React from 'react';
import PropTypes from 'prop-types';

const TBody = props => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

TBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default TBody;