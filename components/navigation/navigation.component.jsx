'use client';

import { useEffect, useId, useRef, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/RockDigitalLogo-196px.jpeg';

import styles from './navigation.module.css';

const navigationLinks = [
	{ href: '/services', label: 'SERVICES' },
	{ href: '/portfolio', label: 'PORTFOLIO' },
	{ href: '/contact', label: 'CONTACT US' },
	{ href: '/blog', label: 'BLOG' },
	{ href: '/admin', label: 'LOGIN', prefetch: false },
	{
		href: '/website-audit',
		label: 'Request a Website Audit',
		className: styles.auditLink,
	},
];

const Navigation = () => {
	const [scroll, setScroll] = useState(false);
	const [isNavVisible, setIsNavVisible] = useState(true);
	const [showOffcanvas, setShowOffcanvas] = useState(false);
	const [headerHeight, setHeaderHeight] = useState(0);
	const mobileNavId = useId();
	const headerRef = useRef(null);

	const closeOffcanvas = () => setShowOffcanvas(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;
		const scrollThreshold = 12;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const hasScrolled = currentScrollY > 0;
			const scrollDelta = currentScrollY - lastScrollY;

			setScroll(hasScrolled);

			if (currentScrollY <= 0) {
				setIsNavVisible(true);
				lastScrollY = 0;
				return;
			}

			if (Math.abs(scrollDelta) < scrollThreshold) {
				return;
			}

			setIsNavVisible(scrollDelta < 0);
			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		document.body.style.overflow = showOffcanvas ? 'hidden' : '';
		if (showOffcanvas) {
			setIsNavVisible(true);
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [showOffcanvas]);

	useEffect(() => {
		const onKeyDown = (event) => {
			if (event.key === 'Escape') {
				closeOffcanvas();
			}
		};

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, []);

	useEffect(() => {
		const headerElement = headerRef.current;

		if (!headerElement) {
			return undefined;
		}

		const updateHeaderHeight = () => {
			setHeaderHeight(headerElement.getBoundingClientRect().height);
		};

		updateHeaderHeight();

		if (typeof ResizeObserver === 'undefined') {
			window.addEventListener('resize', updateHeaderHeight);
			return () => window.removeEventListener('resize', updateHeaderHeight);
		}

		const resizeObserver = new ResizeObserver(() => {
			updateHeaderHeight();
		});

		resizeObserver.observe(headerElement);

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<>
			<div className={styles.headerSpacer} style={{ height: `${headerHeight}px` }} aria-hidden='true' />
			<header
				ref={headerRef}
				className={`${styles.header} ${
					!isNavVisible && !showOffcanvas ? styles.headerHidden : ''
				}`.trim()}
			>
				<div className={styles.navbar}>
					<div className={styles.navbarInner}>
						<Link href='/' className={styles.navbar_brand} aria-label='Rock Digital home'>
							<Image
								src={logo}
								alt='Rock Digital Logo'
								className={scroll ? styles.resize : styles.brandImage}
								priority
								sizes='96px'
							/>
						</Link>

						<nav className={styles.desktopNav} aria-label='Primary navigation'>
							{navigationLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									prefetch={link.prefetch}
									className={`${styles.link} ${link.className || ''}`.trim()}
								>
									{link.label}
								</Link>
							))}
						</nav>

						<button
							type='button'
							className={styles.toggler}
							aria-controls={mobileNavId}
							aria-expanded={showOffcanvas}
							aria-label={showOffcanvas ? 'Close navigation menu' : 'Open navigation menu'}
							onClick={() => setShowOffcanvas((current) => !current)}
						>
							<span />
							<span />
							<span />
						</button>
					</div>
				</div>

				<div
					className={`${styles.backdrop} ${showOffcanvas ? styles.backdropVisible : ''}`}
					aria-hidden='true'
					onClick={closeOffcanvas}
				/>

				<div
					id={mobileNavId}
					className={`${styles.mobilePanel} ${
						showOffcanvas ? styles.mobilePanelOpen : ''
					}`}
					role='dialog'
					aria-modal='true'
					aria-label='Mobile navigation'
				>
					<div className={styles.mobileHeader}>
						<Link href='/' className={styles.mobileBrand} onClick={closeOffcanvas}>
							<Image
								src={logo}
								alt='Rock Digital Logo'
								className={styles.mobileBrandImage}
								sizes='88px'
							/>
						</Link>
						<button
							type='button'
							className={styles.closeButton}
							onClick={closeOffcanvas}
							aria-label='Close navigation menu'
						>
							<span />
							<span />
						</button>
					</div>
					<nav className={styles.mobileNav} aria-label='Mobile navigation links'>
						{navigationLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								prefetch={link.prefetch}
								className={`${styles.link} ${link.className || ''}`.trim()}
								onClick={closeOffcanvas}
							>
								{link.label}
							</Link>
						))}
					</nav>
				</div>
			</header>
		</>
	);
};

export default Navigation;
