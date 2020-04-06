import React from 'react';
import PropTypes from "prop-types";
import {
  Table,
  THead,
  TRow,
  TCell,
  TBody
} from './Table';
import TableLoader from './TableLoader';
import BankDetailsTableRow from './BankDetailsTableRow';
import { headers } from './constants';
import './style.css';

class BankDetailsTable extends React.Component {
  render() {
    const { loading, bankDetails } = this.props;
    return (
      <React.Fragment>
        <Table>
          <THead>
            <TRow>
              {
                headers.map((h) => (
                  <TCell key={h.dataKey}>
                    {h.label}
                  </TCell>
                ))
              }
            </TRow>
          </THead>
          {loading && <TableLoader colspan={headers.length} />}
          {
            !loading && Object.keys(bankDetails).length === 0 && <div className='noDataFound'>No Data Found</div>
          }
          {
            !loading && Object.keys(bankDetails).length !== 0 && (
              <TBody>
                <BankDetailsTableRow headers={headers} data={bankDetails} />
              </TBody>
            )
          }
        </Table>
      </React.Fragment>
    )
  }
}

BankDetailsTable.propTypes = {
  bankDetails: PropTypes.object
};

export default BankDetailsTable;