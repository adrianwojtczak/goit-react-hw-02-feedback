import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.css';

export const Section = ({ title, children }) => (
  <div className={styles.section}>
    <h2 className={styles['[section-title]']}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
