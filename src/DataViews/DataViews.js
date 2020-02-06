import React, {useState} from 'react';

import DataTable from '../DataTable';
import DataTrends from '../DataTrends';

export default function DataViews() {
  const [currentTab, setTab] = useState('table')
  return (
    <div className="container">
      <div className="tabs">
        <ul>
          <li
            className={currentTab === 'table' ? "is-active" : undefined}
          >
            <a
              onClick={() => {setTab('table')}}
            >
              Table view
            </a>
          </li>
          <li
            className={currentTab === 'trend' ? "is-active": undefined}
          >
            <a
              onClick={() => {setTab('trend')}}
            >
              Trend view
            </a>
          </li>
        </ul>
      </div>
      {currentTab === 'table' && <DataTable />}
      {currentTab === 'trend' && <DataTrends />}
    </div>
  );
}