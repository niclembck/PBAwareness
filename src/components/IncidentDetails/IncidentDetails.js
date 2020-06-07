import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const IncidentDetails = ({ data }) => {
  const renderLinks = links => {
    return _.map(links, (link, i) => {
      return (
        <span style={{ marginRight: 10 }}>
          <a href={ link } title={ link } target="_blank">Link { i + 1 }</a>
        </span>
      );
    });
  };

  return (
    <div style={{ marginBottom: 15 }}>
      <p>{ data.name }</p>
      <div>
        { renderLinks(data.links) }
      </div>
    </div>
  );
};

export default IncidentDetails;
