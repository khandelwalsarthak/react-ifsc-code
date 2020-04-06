import React from 'react';
import PropTypes from 'prop-types';

class TBody extends React.Component {
  render() {
    const { className, children } = this.props;
    return <div className={className}>{children}</div>;
  }
}

TBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default TBody;