import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  fontFamily,
} from '../../constants/stylesheet';

const ContactGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const CaontactTitle = styled.h1`
  font-family: ${fontFamily};
  margin-bottom: 16px;
  font-size: 28px;
  font-weight: 400;
`;

const ContactContent = styled.div`
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 300;
  line-height: 1.2;

  p {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }
`;

const ContactMapContainer = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const ContactInfo = ({ html }) => (
  <main>
    <CaontactTitle>Контакты</CaontactTitle>
    <ContactGrid>
      <ContactContent
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <ContactMapContainer>
        <iframe
          title="contact"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.576837283504!2d27.592458215860876!3d53.939261380107624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf6b72435b45%3A0xfd86ac0b9212eefa!2z0YPQuy4g0JvQtdC-0L3QuNC00LAg0JHQtdC00YsgMzksINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1547913751492"
          width="600"
          height="450"
        />
      </ContactMapContainer>
    </ContactGrid>
  </main>
);

ContactInfo.propTypes = {
  html: PropTypes.string.isRequired
};

export default ContactInfo;
