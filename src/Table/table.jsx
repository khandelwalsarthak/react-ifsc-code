import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

class Table extends React.Component {
  render() {
    const { className, children } = this.props;
    return (
      <div className='tableWrapper'>
        <div className={cx('table', className)}>
          {children}
        </div>
      </div>
    )
  }
}

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Table;