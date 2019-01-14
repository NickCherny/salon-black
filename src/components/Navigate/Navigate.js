import * as React from 'react';
import { Link } from 'gatsby';

const ItemNavigate = ({ label, href }) => (
  <Link to={href}>{label}</Link>
);

const Navigate = () => (
  <nav>
    <ItemNavigate href="/catalog" label="Котолог" />
    <ItemNavigate href="/employee" label="Работники" />
  </nav>
);

export default Navigate;
