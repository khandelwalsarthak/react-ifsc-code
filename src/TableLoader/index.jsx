import React from 'react';
import Loader from '../Loader';
import PropTypes from 'prop-types';
import {
  TRow,
  TCell,
  TBody
} from '../Table';
import './style.scss';

const TableLoader = props => {
  const { colspan } = props;
  return (
    <TBody>
      <TRow>
        <TCell colSpan={colspan} className='tableLoader'>
          <Loader />
        </TCell>
      </TRow>
    </TBody>
  );
};

TableLoader.propTypes = {
  colspan: PropTypes.number
};

export default TableLoader;
