import { ascending } from 'd3-array';
import { csv } from 'd3-fetch';
import React, { useEffect, useState } from 'react';

import dataUrl from '../data/data.csv';
import ProgressBar from '../ProgressBar';
import DataTable from './DataTable';

export default function DataTableContainer() {
  // we're just going to fetch the data from a CSV file we've added to our bundle
  const [columns, updateColumns] = useState([]);
  const [rows, updateRows] = useState([]);
  // loading state while we crunch data
  const [loading, setLoading] = useState(true);
  useEffect(
    () => {
      csv(dataUrl).then((data) => {
        // do an initial sort on the data to improve readability;
        // most of the component is generic but this sorting logic is not!
        data.sort((a, b) => (
          ascending(a.County, b.County) ||
          ascending(a.City, b.City) ||
          ascending(a.Year, b.Year)
        ));

        updateColumns([...data.columns]);
        updateRows([...data]);
        setLoading(false);
      });
    },
    // we don't need to keep re-running this fetch on render
    // because the data is never going to change
    []
  );
  // this key function is also specific to our single dataset
  const rowKey = row => `${row.City}_${row.Year}`;
  return (
    <>
      {loading && <ProgressBar />}
      {!loading && <DataTable {...{ columns, rowKey, rows }} />}
    </>
  );
}