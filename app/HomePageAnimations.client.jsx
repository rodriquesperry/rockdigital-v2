'use client';

import { useEffect } from 'react';

const prefersReducedMotion = () =>
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const hoverTargets = [
	'.homepage-card-hover',
	'.homepage-skill-hover',
	'.homepage-process-content-hover',
	'.homepage-process-image-hover',
];

export default function HomePageAnimations() {
	useEffect(() => {
		let ctx;
		let cleanupHover = () => {};

		const run = async () => {
			if (prefersReducedMotion()) {
				return;
			}

			const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
				import('gsap'),
				import('gsap/ScrollTrigger'),
			]);

			gsap.registerPlugin(ScrollTrigger);

			ctx = gsap.context(() => {
				gsap.utils.toArray('[data-animate=\"fade-up\"]').forEach((element) => {
					gsap.fromTo(
						element,
						{ opacity: 0, y: 22 },
						{
							opacity: 1,
							y: 0,
							duration: 1.2,
							ease: 'power3.out',
							scrollTrigger: {
								trigger: element,
								start: 'top 78%',
								once: true,
							},
						}
					);
				});

				const skillCards = gsap.utils.toArray('[data-animate=\"skills-stagger-item\"]');
				const staggeredSkillSet = new Set(skillCards);

				if (skillCards.length) {
					gsap.fromTo(
						skillCards,
						{ opacity: 0, y: 18, scale: 0.985 },
						{
							opacity: 1,
							y: 0,
							scale: 1,
							duration: 1.05,
							stagger: 0.5,
							ease: 'power3.out',
							scrollTrigger: {
								trigger: skillCards[0].parentElement,
								start: 'top 78%',
								once: true,
							},
						}
					);
				}

				gsap.utils.toArray('[data-animate=\"card-reveal\"]').forEach((element) => {
					if (staggeredSkillSet.has(element)) {
						return;
					}

					gsap.fromTo(
						element,
						{ opacity: 0, y: 18, scale: 0.985 },
						{
							opacity: 1,
							y: 0,
							scale: 1,
							duration: 1.05,
							ease: 'power3.out',
							scrollTrigger: {
								trigger: element,
								start: 'top 80%',
								once: true,
							},
						}
					);
				});

				const processSection = document.querySelector('[data-animate=\"process-section\"]');
				if (processSection) {
					const heading = processSection.querySelectorAll('[data-animate=\"process-heading\"]');
					const steps = processSection.querySelectorAll('[data-animate=\"process-step\"]');

					gsap.fromTo(
						heading,
						{ opacity: 0, y: 22 },
						{
							opacity: 1,
							y: 0,
							duration: 1,
							stagger: 0.08,
							ease: 'power3.out',
							scrollTrigger: {
								trigger: processSection,
								start: 'top 78%',
								once: true,
							},
						}
					);

					steps.forEach((step, index) => {
						gsap.fromTo(
							step,
							{ opacity: 0, y: 22, x: index % 2 === 0 ? -28 : 28 },
							{
								opacity: 1,
								y: 0,
								x: 0,
								duration: 1.02,
								delay: index * 0.1,
								ease: 'power3.out',
								scrollTrigger: {
									trigger: step,
									start: 'top 80%',
									once: true,
								},
							}
						);
					});
				}

				const listeners = [];
				hoverTargets.forEach((selector) => {
					gsap.utils.toArray(selector).forEach((element) => {
						const hoverIn = () => {
							gsap.to(element, {
								y: -3,
								scale: 1.004,
								duration: 0.35,
								ease: 'power3.out',
								overwrite: 'auto',
							});
						};

						const hoverOut = () => {
							gsap.to(element, {
								y: 0,
								scale: 1,
								duration: 0.35,
								ease: 'power3.out',
								overwrite: 'auto',
							});
						};

						element.addEventListener('mouseenter', hoverIn);
						element.addEventListener('mouseleave', hoverOut);
						listeners.push(() => {
							element.removeEventListener('mouseenter', hoverIn);
							element.removeEventListener('mouseleave', hoverOut);
						});
					});
				});

				cleanupHover = () => {
					listeners.forEach((dispose) => dispose());
				};
			});
		};

		run();

		return () => {
			cleanupHover();
			ctx?.revert();
		};
	}, []);

	return null;
}
