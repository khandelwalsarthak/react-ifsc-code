import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

const THead = props => {
  const { className, children } = props;
  return <div className={cx('tableHead', className)}>{children}</div>;
};

THead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default THead;