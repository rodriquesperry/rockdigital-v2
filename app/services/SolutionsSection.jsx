'use client';

import { useState } from 'react';
import Link from 'next/link';

import styles from './services.module.css';

const SolutionsSection = ({ solutions }) => {
	const [selectedSolution, setSelectedSolution] = useState(solutions[0]);

	return (
		<div className={styles.solutionsContent}>
			<nav className={styles.solutionsNav} aria-label='Service solutions'>
				{solutions.map((solution) => {
					const isSelected = solution.label === selectedSolution.label;

					return (
						<button
							key={solution.label}
							type='button'
							className={`${styles.solutionLink} ${
								isSelected ? styles.solutionLinkActive : ''
							}`.trim()}
							onClick={() => setSelectedSolution(solution)}
							aria-pressed={isSelected}
						>
							{solution.label}
						</button>
					);
				})}
			</nav>

			<div className={styles.solutionsDivider} aria-hidden='true' />

			<div className={styles.solutionsCopy}>
				<p>{selectedSolution.paragraph1}</p>
				<p>{selectedSolution.paragraph2}</p>
				<Link href={selectedSolution.href} className={styles.learnMoreLink}>
					Learn More
					<span aria-hidden='true' className={styles.learnMoreArrow}>
						&rarr;
					</span>
				</Link>
			</div>
		</div>
	);
};

export default SolutionsSection;
