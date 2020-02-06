import { descending } from 'd3-array';
import React, { useEffect, useState } from 'react';

import fetchData from '../data/fetchData';
import ProgressBar from '../ProgressBar';
import DataTrends from './DataTrends';

export default function DataTrendsContainer() {
  const [datasets, updateDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData().then(data => {
      const all2015Rows = data
        .filter(({ Year }) => Year === 2015)
        ;
      const numMultiples = 10;
      // rank cities by 2015 rent
      const topCitiesByRent = all2015Rows
        .sort((a, b) => descending(a.Median_List_Rent_IA, b.Median_List_Rent_IA))
        .slice(0, numMultiples)
        .map(({ City }) => City)
        ;
      // get all data for these cities
      const topCitiesByRentData = {
        data: data.filter(({ City }) => topCitiesByRent.includes(City)),
        facet: 'City',
        measure: 'Median_List_Rent_IA',
        title: `${numMultiples} most expensive cities, as of 2015`,
      };

      // rank cities by percentage change as of 2015
      const topCitiesByPctChange = all2015Rows
        .sort((a, b) => descending(
          a.Median_List_Rent_IA_PercentChg_1994,
          b.Median_List_Rent_IA_PercentChg_1994
        ))
        .slice(0, numMultiples)
        .map(({ City }) => City)
      // get all data for these cities
      const topCitiesByPctChangeData = {
        data: data.filter(({ City }) => topCitiesByPctChange.includes(City)),
        facet: 'City',
        measure: 'Median_List_Rent_IA_PercentChg_1994',
        measureFormat: '%',
        title: `${numMultiples} largest % increases over 1994, as of 2015`,
      };
      updateDatasets([topCitiesByRentData, topCitiesByPctChangeData]);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <ProgressBar />}
      {!loading && <DataTrends {...{datasets}} />}
    </>
  );
}