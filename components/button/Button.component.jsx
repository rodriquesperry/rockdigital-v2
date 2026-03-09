import React from 'react';
import Link from 'next/link';

const Button = (link, text) => {
	return (
		<Link
			href={link}
			className={`${styles.btn} lato`}
		>
			<span>{text}</span>
		</Link>
	);
};

export default Button;
