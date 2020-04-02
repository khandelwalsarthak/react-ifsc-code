import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Spinner from '../Spinner/index';
import './style.scss';

const Button = (props) => {
  const {
    style,
    className,
    loading,
    disabled,
    children,
    isSubmit
  } = props;

  const btnClasses = `${className}`;

  const handleClick = (e, fn) => {
    if (loading) return;
    fn(e);
  };

  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={cx('button', btnClasses, {
        'disabled': disabled,
      })}
      onClick={e => handleClick(e, props.onClick)}
      style={style}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  className: '',
  onClick: () => { },
  children: null,
  isSubmit: false
};

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  isSubmit: PropTypes.bool
};

export default Button;
