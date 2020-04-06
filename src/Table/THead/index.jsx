import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

class THead extends React.Component {
  render() {
    const { className, children } = this.props;
    return <div className={cx('tableHead', className)}>{children}</div>;
  }
}

THead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default THead;