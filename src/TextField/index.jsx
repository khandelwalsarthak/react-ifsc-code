import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import "./style.css";

class TextField extends React.Component {
  render() {
    const { className, style, type, value, readOnly, label, id, name, defaultValue } = this.props;
    return (
      <div className="textFieldWrapper">
        <input
          className={cx("textField", className)}
          style={style}
          type={type || 'text'}
          value={value || defaultValue}
          readOnly={readOnly}
          {...this.props.textFieldProps}
          name={name}
          required=""
          id={id}
        />

        <label className="floatLabel" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
}

TextField.defaultProps = {
  label: "",
  value: "",
  defaultValue: "",
  textFieldProps: {},
  readOnly: false
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  textFieldProps: PropTypes.object,
  readOnly: PropTypes.bool
};

export default TextField;
