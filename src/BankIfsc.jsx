import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import cx from 'classnames';
import Button from './Button';
import TextField from './TextField';
import BankDetailsTable from './BankDetailsTable';
import { getBankDetails } from './service';
import './style.scss';

const BankIfsc = props => {
  const { className } = props;
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({ ifsc: '' });
  const [errors, setErrors] = useState({});
  const [bankDetails, setBankDetails] = useState({});

  const onInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({ ...inputs, [event.target.name]: event.target.value }));
  };

  const fetchApiData = async () => {
    try {
      setLoading(true);
      const { ifsc } = inputs;
      const result = await getBankDetails(ifsc);
      setLoading(false)
      setBankDetails(result);
    } catch (error) {
      console.log('error', error);
      setBankDetails({});
      setLoading(false);
    }
  };

  const checkIfscValidation = (data) => {
    let isError = false;
    const errors = {};
    const { ifsc } = data;
    const ifscRegex = /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/;

    if (!ifscRegex.test(ifsc)) {
      isError = true;
      errors.ifsc = 'Please enter correct ifsc code';
    }

    if (ifsc.length <= 0) {
      isError = true;
      errors.ifsc = 'IFSC is required';
    }

    setErrors(errors);
    return isError;
  };

  const onButtonClick = () => {
    const err = checkIfscValidation(inputs);
    if (!err) {
      fetchApiData();
    }
  };

  const handleKeyUp = (event) => {
    event.persist();
    setErrors((errors) => ({ ...errors, [event.target.name]: '' }));
    if (event.keyCode === 13) {
      const err = checkIfscValidation(inputs);
      if (!err) {
        fetchApiData();
      }
    }
  };

  const { ifsc } = inputs;
  return (
    <div className={cx('container', className)}>
      <TextField
        name='ifsc'
        value={ifsc}
        label='Enter IFSC Code'
        textFieldProps={{
          onChange: onInputChange,
          onKeyUp: handleKeyUp
        }}
        className={ifsc ? 'active inputField' : 'inputField'}
        id='ifsc'
      />
      {errors.ifsc && <div className="hasError">{errors.ifsc}</div>}
      <Button loading={loading} onClick={onButtonClick}>Search</Button>
      <BankDetailsTable loading={loading} bankDetails={bankDetails} />
    </div>
  )
}

BankIfsc.defaultProps = {
  className: ''
};

BankIfsc.propTypes = {
  className: PropTypes.string
};

export default BankIfsc;