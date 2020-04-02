import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

const TCell = props => {
  const { className, children } = props;
  return <div className={cx('tableCell', className)}>{children}</div>;
};

TCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default TCell;