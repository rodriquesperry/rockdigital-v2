'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './nav_link.module.css';

const NavLink = ({ href, children }) => {
  const path = usePathname();

	return (
    <Link href={href} className={path.startsWith(href) ? `${styles.link} ${styles.action}`: styles.link}>
      {children}
    </Link>
  )
};

export default NavLink;
