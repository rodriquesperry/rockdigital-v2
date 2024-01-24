import React from 'react';

import styles from './powered.styles.module.css'

const PoweredBy = () => {
  return (
    <div className={`${styles.powered_by} text-center py-3'`}>
      <small>
        &copy;2022 Rock Digital Web Agency | Powered by &nbsp;
        <a href='http://rockdigital.agency' target='_blank' rel='noreferrer'>
          Rock Digital
        </a>
      </small>
    </div>
  );
};

export default PoweredBy;
