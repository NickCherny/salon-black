import React from 'react';
import PropTypes from 'prop-types';

const CatalogList = ({ data }) => (
  <div>
    {JSON.stringify(data)}
  </div>
);

CatalogList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CatalogList;
