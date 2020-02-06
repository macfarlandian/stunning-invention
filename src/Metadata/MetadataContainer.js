import { parse } from 'date-fns';
import React from 'react';

import metadataObj from '../data/metadata.json';
import Metadata from './Metadata';

export default function MetadataContainer() {
  // UI component expects lastUpdated to be a Date; we'll need to transform it
  const { lastUpdated, ...passThruProps } = metadataObj;
  const metadataProps = {
    lastUpdated: parse(lastUpdated, 'y-MM-dd', new Date()),
    ...passThruProps,
  };
  return <Metadata {...metadataProps} />;
}