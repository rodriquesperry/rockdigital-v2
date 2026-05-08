'use client';

import { useEffect, useState } from 'react';

import styles from './digitalMarketingGuide.module.css';

export default function DigitalMarketingGuideProgress() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const updateProgress = () => {
			const scrollTop = window.scrollY;
			const documentHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const nextProgress = documentHeight > 0 ? scrollTop / documentHeight : 0;
			setProgress(Math.min(Math.max(nextProgress, 0), 1));
		};

		updateProgress();
		window.addEventListener('scroll', updateProgress, { passive: true });
		window.addEventListener('resize', updateProgress);

		return () => {
			window.removeEventListener('scroll', updateProgress);
			window.removeEventListener('resize', updateProgress);
		};
	}, []);

	return (
		<div className={styles.progressTrack} aria-hidden='true'>
			<div
				className={styles.progressBar}
				style={{ transform: `scaleX(${progress})` }}
			/>
		</div>
	);
}
