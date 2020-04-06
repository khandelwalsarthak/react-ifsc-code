import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import cx from 'classnames';
import Button from './Button';
import TextField from './TextField';
import BankDetailsTable from './BankDetailsTable';
import { getBankDetails } from './service';

class BankIfsc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      inputs: {
        ifsc: ''
      },
      errors: {},
      bankDetails: {}
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.fetchApiData = this.fetchApiData.bind(this);
    this.checkIfscValidation = this.checkIfscValidation.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  onInputChange(event) {
    event.persist();
    this.setState((prevState) => {
      return {
        ...prevState,
        inputs: {
          ...prevState.inputs,
          [event.target.name]: event.target.value
        }
      }
    })
  };

  async fetchApiData() {
    try {
      this.setState({
        loading: true
      })
      const { ifsc } = this.state.inputs;
      const result = await getBankDetails(ifsc);
      this.setState({
        loading: false,
        bankDetails: result
      });
    } catch (error) {
      console.log('error', error);
      this.setState({
        loading: false,
        bankDetails: {}
      })
    }
  };

  checkIfscValidation(data) {
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

    this.setState({ errors });
    return isError;
  };

  onButtonClick() {
    const { inputs } = this.state;
    const err = this.checkIfscValidation(inputs);
    if (!err) {
      this.fetchApiData();
    }
  };

  handleKeyUp(event) {
    event.persist();
    const { inputs } = this.state;
    this.setState((prevState) => {
      return {
        ...prevState,
        errors: {
          ...prevState.errors,
          [event.target.name]: ''
        }
      }
    })
    if (event.keyCode === 13) {
      const err = this.checkIfscValidation(inputs);
      if (!err) {
        this.fetchApiData();
      }
    }
  };

  render() {
    const { className } = this.props;
    const { loading, inputs, errors, bankDetails } = this.state;
    const { ifsc } = inputs;
    return (
      <div className={cx('container', className)}>
        <TextField
          name='ifsc'
          value={ifsc}
          label='Enter IFSC Code'
          textFieldProps={{
            onChange: this.onInputChange,
            onKeyUp: this.handleKeyUp
          }}
          className={ifsc ? 'active inputField' : 'inputField'}
          id='ifsc'
        />
        {errors.ifsc && <div className="hasError">{errors.ifsc}</div>}
        <Button loading={loading} onClick={this.onButtonClick}>Search</Button>
        <BankDetailsTable loading={loading} bankDetails={bankDetails} />
      </div>
    )
  }
}

BankIfsc.defaultProps = {
  className: ''
};

BankIfsc.propTypes = {
  className: PropTypes.string
};

export default BankIfsc;