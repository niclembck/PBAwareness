import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import USAMap from "react-usa-map";

import { stateMap } from '../../utils/stateMap.utils';

const USMap = ({ handleSelect }) => {
  const [ selectedStateStyle, setSelectedStateStyle ] = useState(null);

  const handleClick = e => {
    setSelectedStateStyle({
      [e.target.dataset.name]: {
        fill: "navy"
      }
    });
    const selectedState = _.find(stateMap, { twoLetter: e.target.dataset.name })
    handleSelect(selectedState);
  };

  return (
    <Container>
      <USAMap
        onClick={ handleClick }
        height="100%"
        width="100%"
        customize={ selectedStateStyle }
      />
    </Container>
  );
};

export default USMap;

USMap.propTypes = {
  handleSelect: PropTypes.func
};

const Container = styled.div`
  display: flex;
  flex: 1;

  path {
    cursor: pointer;

    &:hover {
      opacity: .9;
    }
  }
`;
