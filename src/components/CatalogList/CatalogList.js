import { compose, setDisplayName, mapProps, withProps } from 'recompose';

import CatalogList from './CatalogList.view';

const enhanceCatalogList = compose(
  setDisplayName('CatalogList'),
  withProps(console.log),
  mapProps(({ data }) => ({
    data: Object.values(data).map(
      ({
        node: {
          html,
          frontmatter: { title },
        },
      }) => ({ html, title })
    ),
  }))
);

export default enhanceCatalogList(CatalogList);
