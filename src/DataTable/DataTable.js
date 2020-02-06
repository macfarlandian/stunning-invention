import PropTypes from 'prop-types';
import React from 'react';

export default function DataTable({ columns, rowKey, rows }) {
  return (
    <div className="container is-size-7">
      <div className="table-container">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              {columns.map(colName => (
                <th key={colName}>{colName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={rowKey(row)}>
                {columns.map(colName => (
                  <td key={colName}>
                    {row[colName]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

DataTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  // this should take a row object and return some kind of unique identifier
  rowKey: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};