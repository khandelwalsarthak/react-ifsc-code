import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

class TRow extends React.Component {
  render() {
    const { className, children } = this.props;
    return <div className={cx('tableRow', className)}>{children}</div>;
  }
}

TRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default TRow;