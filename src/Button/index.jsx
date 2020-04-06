import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Spinner from '../Spinner/index';
import './style.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e, fn) {
    const { loading } = this.props;
    if (loading) return;
    fn(e);
  };

  render() {
    const {
      style,
      className,
      loading,
      disabled,
      children,
      isSubmit
    } = this.props;

    return (
      <button
        type={isSubmit ? 'submit' : 'button'}
        className={cx('button', className, {
          'disabled': disabled,
        })}
        onClick={e => this.handleClick(e, this.props.onClick)}
        style={style}
      >
        {loading ? <Spinner /> : children}
      </button>
    );
  }
}

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
