import React from 'react';
import Loader from '../Loader';
import PropTypes from 'prop-types';
import {
  TRow,
  TCell,
  TBody
} from '../Table';
import './style.css';

class TableLoader extends React.Component {
  render() {
    const { colspan } = this.props;
    return (
      <TBody>
        <TRow>
          <TCell colSpan={colspan} className='tableLoader'>
            <Loader />
          </TCell>
        </TRow>
      </TBody>
    );
  }
}

TableLoader.propTypes = {
  colspan: PropTypes.number
};

export default TableLoader;
