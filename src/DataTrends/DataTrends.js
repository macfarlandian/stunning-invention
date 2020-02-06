import PropTypes from 'prop-types';
import React from 'react';
import { VegaLite } from 'react-vega';

const prepareData = ({ data }) => {
return {
  data: data.map(({ Year, ...fields }) => ({
    // to display years properly Vega actually wants them to be strings
    Year: ''+Year,
    ...fields,
  })),
 };
};

const createFacetSpec = ({ facet, measure, measureFormat }) => {
  return {
    data: {
      name: 'data',
    },
    mark: {
      type: 'line',
    },
    encoding: {
      facet: {
        field: facet,
        type: 'nominal',
        columns: 5,
      },
      x: {
        field: 'Year',
        type: 'temporal',
        timeUnit: 'year',
        axis: {
          title: 'Year',
        },
      },
      y: {
        field: measure,
        type: 'quantitative',
        axis: {
          format: measureFormat,
          formatType: 'number',
        },
      },
    },
  };
};

export default function DataTrends({ datasets }) {
  return (
    <>
      {datasets.map((dataset) => (
        <section
          key={dataset.title}
          className="section"
        >
          <h1 className="title is-4">{dataset.title}</h1>
          <VegaLite
            data={prepareData(dataset)}
            spec={createFacetSpec(dataset)}
          />
        </section>

      ))}
    </>
  );
}

DataTrends.propTypes = {
  datasets: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    measure: PropTypes.string.isRequired,
    measureFormat: PropTypes.string,
    facet: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  })).isRequired,
};