import React from 'react';

import { Navigate } from '../components/Navigate';
import { Layout } from '../components/Layout';
import Image from '../components/image';
import { SEO } from '../components/SEO';

const IndexPage = (props) => {
  console.log(props);
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Navigate />
    </Layout>
  );
}

export default IndexPage;
