import { autoType } from 'd3-dsv';
import { csv } from 'd3-fetch';

import dataUrl from './data.csv';

export default function fetchData() {
  return csv(dataUrl, autoType);
}