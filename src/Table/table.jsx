import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

const Table = props => {
  const { className, children } = props;

  return (
    <div className='tableWrapper'>
      <div className={cx('table', className)}>
        {children}
      </div>
    </div>
  )
}

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Table;