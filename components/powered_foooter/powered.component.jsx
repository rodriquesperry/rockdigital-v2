import React from 'react';
import Link from 'next/link'
import styles from './powered.styles.module.css'

const PoweredBy = () => {
  return (
    <div className={`${styles.powered_by} text-center py-3'`}>
      <small>
        &copy;2022 Rock Digital Web Agency | Powered by &nbsp;
        <Link href='http://rockdigital.agency' rel='noreferrer'>
          Rock Digital
        </Link>
      </small>
    </div>
  );
};

export default PoweredBy;
