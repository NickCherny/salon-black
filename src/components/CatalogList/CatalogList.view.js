import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const CatalogListGrid = styled.div`
  ul {
    margin: 0;
  }

  li {
    list-style: none;
    line-height: 1;
  }
`;

const CatalogListTitle = styled.h3`
  margin-bottom: 16px;
`;

const CatalogList = ({ data }) => (
  <main>
    {data.map(({
      title,
      html
    }) => (
      <CatalogContainer key={`catalog_item_${JSON.stringify(title)}`}>
        <CatalogListTitle>{title}</CatalogListTitle>
        <CatalogListGrid
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </CatalogContainer>
    ))}
  </main>
);

CatalogList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CatalogList;
