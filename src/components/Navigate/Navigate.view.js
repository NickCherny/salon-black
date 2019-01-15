import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ItemNavigate = ({ label, href }) => (
  <Link to={href}>{label}</Link>
);

ItemNavigate.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const Navigate = () => (
  <nav>
    <ItemNavigate href="/catalog" label="Котолог" />
    <ItemNavigate href="/employee" label="Работники" />
  </nav>
);

export default Navigate;
