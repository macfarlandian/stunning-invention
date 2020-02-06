import React from 'react';

import DataTable from './DataTable';
import Metadata from './Metadata';

function App() {
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <Metadata/>
        </div>
      </section>
      <div className="section">
        <DataTable/>
      </div>
    </>
  );
}

export default App;
