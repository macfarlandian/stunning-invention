import React from 'react';

import DataViews from './DataViews';
import Metadata from './Metadata';

function App() {
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <Metadata/>
        </div>
      </section>
      <section>
        <DataViews />
      </section>
    </>
  );
}

export default App;
