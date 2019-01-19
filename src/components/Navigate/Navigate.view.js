import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ItemNavigate = ({ label, href }) => <Link to={href}>{label}</Link>;

const Navigate = () => (
  <nav>
    <ItemNavigate href="/catalog" label="Котолог" />
    <ItemNavigate href="/contact" label="Контакты" />
  </nav>
);

ItemNavigate.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Navigate;
