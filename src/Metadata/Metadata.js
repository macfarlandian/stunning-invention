import { format } from 'date-fns';
import PropTypes from 'prop-types';
import React from 'react';

export default function Metadata({
  description,
  lastUpdated,
  sources,
  title,
}) {
  return (
    <div className="container">
      <h1 className="title">Dataset: {title}</h1>
      <div className="content">
        <dl>
          <dt>Description</dt>
          <dd>{description}</dd>
  
          <dt>Sources</dt>
          {sources.map(({ name, url }) => (
            <dd key={name}><a href={url}>{name}</a></dd>
          ))}
  
          <dt>Last updated</dt>
          <dd>{format(lastUpdated, 'PP')}</dd>
        </dl>
      </div>
    </div>
  );
}

Metadata.propTypes = {
  description: PropTypes.string.isRequired,
  lastUpdated: PropTypes.instanceOf(Date).isRequired,
  sources: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
  })).isRequired,
  title: PropTypes.string.isRequired,
};