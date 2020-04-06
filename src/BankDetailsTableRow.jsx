import React from 'react';
import PropTypes from 'prop-types';
import {
  TRow,
  TCell
} from './Table';

class BankDetailsTableRow extends React.Component {
  render() {
    const { headers, data } = this.props;
    return (
      <TRow>
        {headers.map((h, index) => {
          switch (h.dataKey) {
            default:
              return (
                <TCell key={`${h.dataKey}${index}`}>
                  <>{data[h.dataKey] ? data[h.dataKey] : '-'}</>
                </TCell>
              );
          }
        })}
      </TRow>
    );
  }
}

BankDetailsTableRow.propTypes = {
  data: PropTypes.object,
  headers: PropTypes.array
};

export default BankDetailsTableRow;
