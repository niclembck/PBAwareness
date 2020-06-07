import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IncidentDetails from '../IncidentDetails/IncidentDetails';

const StateDetails = ({ data, selectedState }) => {
  const renderDataList = stateName => {
    const stateData = _.filter(data, { state: stateName });
    return _.map(stateData, d => {
      return <IncidentDetails data={ d } />
    });
  };

  if (!selectedState) return <div>Select a state to view details</div>

  return (
    <div>
      <h2>{ selectedState.name }</h2>
      { renderDataList(selectedState.name) }
    </div>
  );
};

export default StateDetails;
